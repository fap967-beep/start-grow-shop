import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded">
              <MapPin className="w-4 h-4" />
              г. Калуга, ул. Тульская, 102
            </div>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-foreground">
              Подшипники на Тульской
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Широкий ассортимент подшипников для промышленности, автомобилей 
              и сельхозтехники. Качественная продукция по доступным ценам.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+74842560929"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (4842) 56-09-29
              </a>
              <a
                href="tel:+74842333435"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium border border-border rounded hover:bg-secondary transition-colors"
              >
                <Phone className="w-4 h-4" />
                (4842) 33-34-35
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Пн–Пт: 9:00–18:00, Сб: 9:00–15:00</span>
            </div>
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-6 bg-card rounded border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">наименований в наличии</p>
            </div>
            <div className="p-6 bg-card rounded border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-2">Опт</div>
              <p className="text-sm text-muted-foreground">и розничные продажи</p>
            </div>
            <div className="p-6 bg-card rounded border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">оригинальная продукция</p>
            </div>
            <div className="p-6 bg-card rounded border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-2">24ч</div>
              <p className="text-sm text-muted-foreground">срочный заказ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
