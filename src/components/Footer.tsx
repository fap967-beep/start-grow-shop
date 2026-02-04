import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg font-semibold mb-1">
              Подшипники на Тульской
            </div>
            <div className="text-sm opacity-80">
              ИП Зимина О.Н.
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+74842560929" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              (4842) 56-09-29
            </a>
            <a href="tel:+74842333435" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              (4842) 33-34-35
            </a>
          </div>

          <div className="text-sm opacity-80">
            г. Калуга, ул. Тульская, 102
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
