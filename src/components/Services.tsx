import { motion } from "framer-motion";
import { Sparkles, Shield, Zap, Heart } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Качество",
    description: "Высочайший стандарт качества в каждой детали нашей работы.",
  },
  {
    icon: Shield,
    title: "Надёжность",
    description: "Гарантируем стабильность и долгосрочное сотрудничество.",
  },
  {
    icon: Zap,
    title: "Скорость",
    description: "Оперативное выполнение задач без потери качества.",
  },
  {
    icon: Heart,
    title: "Забота",
    description: "Индивидуальный подход и внимание к каждому клиенту.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Наши преимущества
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Почему выбирают <span className="text-gradient-gold">нас</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Мы создаём ценность для наших клиентов через качество, инновации и персональный подход.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
