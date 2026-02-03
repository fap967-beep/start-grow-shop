const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl font-semibold">
            <span className="text-gradient-gold">Бренд</span>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2024 Бренд. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
