const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl font-semibold">
            Подшипники <span className="text-gradient-gold">на Тульской</span>
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
            © 2024 ИП Зимина О.Н. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
