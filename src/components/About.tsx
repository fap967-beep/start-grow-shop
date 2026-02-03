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
              О нас
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
              Ваш надёжный <span className="text-gradient-gold">поставщик</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              «Подшипники на Тульской» — специализированный павильон по продаже 
              подшипников в Калуге. Мы работаем с проверенными поставщиками и гарантируем 
              качество каждого изделия.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Предлагаем подшипники для автомобилей, промышленного оборудования, 
              сельхозтехники и бытовой техники. Консультируем по подбору и совместимости.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-gold mb-2">
                  ИП Зимина О.Н.
                </div>
                <p className="text-sm text-muted-foreground">Официальная организация</p>
              </div>
              <div>
                <div className="font-display text-3xl font-semibold text-gradient-gold mb-2">
                  Калуга
                </div>
                <p className="text-sm text-muted-foreground">ул. Тульская, 102</p>
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
                <div className="font-display text-5xl font-bold text-gradient-gold mb-4">
                  ⚙️
                </div>
                <p className="text-foreground font-display text-xl font-semibold mb-2">
                  Подшипники
                </p>
                <p className="text-muted-foreground text-sm">
                  Качество и надёжность
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
