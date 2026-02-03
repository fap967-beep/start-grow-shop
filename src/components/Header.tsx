import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          Подшипники <span className="text-gradient-gold">на Тульской</span>
        </a>
        
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              О нас
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 text-sm font-medium bg-accent text-accent-foreground rounded-full hover:opacity-90 transition-opacity"
        >
          Связаться
        </a>
      </nav>
    </motion.header>
  );
};

export default Header;
