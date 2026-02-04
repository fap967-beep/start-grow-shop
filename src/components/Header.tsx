import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
    >
      {/* Top bar with contacts */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between text-sm">
          <span>г. Калуга, ул. Тульская, 102</span>
          <div className="flex items-center gap-4">
            <a href="tel:+74842560929" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              (4842) 56-09-29
            </a>
            <a href="tel:+74842333435" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3.5 h-3.5" />
              (4842) 33-34-35
            </a>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-semibold text-foreground">
          Подшипники на Тульской
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              О компании
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </li>
        </ul>

        <a
          href="tel:+74842560929"
          className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
        >
          Позвонить
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
