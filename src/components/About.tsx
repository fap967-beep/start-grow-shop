import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              О компании
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Мы создаём <span className="text-gradient-gold">будущее</span> вместе
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Наша компания — это команда профессионалов, объединённых общей целью: 
              предоставлять клиентам исключительный сервис и продукты высочайшего качества.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мы верим в силу инноваций и постоянно развиваемся, чтобы соответствовать 
              самым высоким стандартам индустрии и превосходить ожидания наших партнёров.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-4xl font-semibold text-gradient-gold mb-2">
                  10+
                </div>
                <p className="text-sm text-muted-foreground">Лет опыта</p>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-gradient-gold mb-2">
                  500+
                </div>
                <p className="text-sm text-muted-foreground">Клиентов</p>
              </div>
              <div>
                <div className="font-display text-4xl font-semibold text-gradient-gold mb-2">
                  99%
                </div>
                <p className="text-sm text-muted-foreground">Довольных</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-4 rounded-xl border border-accent/20" />
              <div className="absolute inset-8 rounded-lg border border-accent/10" />
              <div className="relative z-10 text-center p-8">
                <div className="font-display text-6xl font-bold text-gradient-gold mb-4">
                  B
                </div>
                <p className="text-muted-foreground text-sm">
                  Ваш надёжный партнёр
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
