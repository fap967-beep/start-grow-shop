import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Шариковые, роликовые, игольчатые подшипники",
  "Подшипники для автомобилей всех марок",
  "Промышленные подшипники",
  "Подшипники для сельхозтехники",
  "Консультация по подбору",
  "Гарантия на всю продукцию",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              О компании
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-6 text-foreground">
              Надёжный поставщик подшипников в Калуге
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              «Подшипники на Тульской» — специализированный павильон по продаже 
              подшипников. Мы работаем с проверенными поставщиками и гарантируем 
              качество каждого изделия.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Предлагаем подшипники для автомобилей, промышленного оборудования, 
              сельхозтехники и бытовой техники. Консультируем по подбору и совместимости.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary rounded p-8"
          >
            <div className="space-y-6">
              <div className="pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">Организация</div>
                <div className="font-display text-xl font-semibold text-foreground">
                  ИП Зимина О.Н.
                </div>
              </div>
              <div className="pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">Адрес</div>
                <div className="font-display text-xl font-semibold text-foreground">
                  г. Калуга, ул. Тульская, 102
                </div>
              </div>
              <div className="pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground mb-1">Телефоны</div>
                <div className="space-y-1">
                  <a href="tel:+74842560929" className="block font-display text-xl font-semibold text-primary hover:underline">
                    (4842) 56-09-29
                  </a>
                  <a href="tel:+74842333435" className="block font-display text-xl font-semibold text-primary hover:underline">
                    (4842) 33-34-35
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Режим работы</div>
                <div className="font-display text-xl font-semibold text-foreground">
                  Пн–Пт: 9:00–18:00
                </div>
                <div className="font-display text-lg text-muted-foreground">
                  Сб: 9:00–15:00
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
