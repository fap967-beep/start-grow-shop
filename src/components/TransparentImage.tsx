import { useEffect, useState } from "react";

type Rgb = { r: number; g: number; b: number };

const isExternalUrl = (url: string): boolean => {
  if (url.startsWith("data:") || url.startsWith("blob:")) return false;
  try {
    return new URL(url, window.location.href).origin !== window.location.origin;
  } catch {
    return false;
  }
};

const dist = (a: Rgb, b: Rgb) => {
  const dr = a.r - b.r;
  const dg = a.g - b.g;
  const db = a.b - b.b;
  return Math.sqrt(dr * dr + dg * dg + db * db);
};

const stats = (c: Rgb) => {
  const max = Math.max(c.r, c.g, c.b);
  const min = Math.min(c.r, c.g, c.b);
  const sat = max - min; // simple saturation proxy
  const br = (c.r + c.g + c.b) / 3;
  return { sat, br };
};

const sampleCorners = (data: Uint8ClampedArray, w: number, h: number): Rgb[] => {
  const get = (x: number, y: number): Rgb => {
    const i = (y * w + x) * 4;
    return { r: data[i], g: data[i + 1], b: data[i + 2] };
  };

  return [get(0, 0), get(w - 1, 0), get(0, h - 1), get(w - 1, h - 1)];
};

/**
 * Removes a typical light-gray checkerboard background by flood-fill from corners.
 * This avoids destroying highlights on the object because only edge-connected pixels are removed.
 */
const removeCheckerboardBackground = (
  imageData: ImageData,
  options?: { baseThreshold?: number; shadowThreshold?: number }
): ImageData => {
  const { data, width: w, height: h } = imageData;
  const baseThreshold = options?.baseThreshold ?? 48;
  const shadowThreshold = options?.shadowThreshold ?? 105;

  const bgSamples = sampleCorners(data, w, h);
  const visited = new Uint8Array(w * h);
  const queue: number[] = [];

  const push = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= w || y >= h) return;
    queue.push(y * w + x);
  };

  // Start from all corners (checkerboard can alternate colors)
  push(0, 0);
  push(w - 1, 0);
  push(0, h - 1);
  push(w - 1, h - 1);

  const matchesBg = (c: Rgb) => {
    // strict match to the corner colors
    if (bgSamples.some((s) => dist(c, s) <= baseThreshold)) return true;

    // allow removing soft neutral shadow that belongs to the background
    const { sat, br } = stats(c);
    if (sat <= 22 && br >= 150 && bgSamples.some((s) => dist(c, s) <= shadowThreshold)) {
      return true;
    }

    return false;
  };

  while (queue.length) {
    const idx = queue.pop()!;
    if (visited[idx]) continue;
    visited[idx] = 1;

    const i = idx * 4;
    const a = data[i + 3];
    if (a === 0) continue;

    const c: Rgb = { r: data[i], g: data[i + 1], b: data[i + 2] };
    if (!matchesBg(c)) continue;

    // Make transparent
    data[i + 3] = 0;

    const x = idx % w;
    const y = (idx - x) / w;
    push(x - 1, y);
    push(x + 1, y);
    push(x, y - 1);
    push(x, y + 1);
  }

  return imageData;
};

type TransparentImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src"
> & {
  src: string;
  /** Enable for images that may contain a baked-in checkerboard. */
  removeCheckerboard?: boolean;
};

export default function TransparentImage({
  src,
  removeCheckerboard = true,
  ...imgProps
}: TransparentImageProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setProcessedSrc(null);

    if (!removeCheckerboard) return;

    const img = new Image();

    // IMPORTANT: set crossOrigin BEFORE src for external images
    if (isExternalUrl(src)) {
      img.crossOrigin = "anonymous";
    }

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const out = removeCheckerboardBackground(imageData);
        ctx.putImageData(out, 0, 0);

        const url = canvas.toDataURL("image/png");
        if (!cancelled) setProcessedSrc(url);
      } catch {
        // If processing fails, silently fall back to original
      }
    };

    img.onerror = () => {
      // Fall back silently
    };

    img.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, removeCheckerboard]);

  return <img src={processedSrc ?? src} {...imgProps} />;
}
