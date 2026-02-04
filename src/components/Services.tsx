import { motion } from "framer-motion";
import { Package, Shield, Truck, Headphones } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Широкий ассортимент",
    description: "Подшипники всех типов и размеров: шариковые, роликовые, игольчатые, упорные.",
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "Только оригинальная продукция от проверенных производителей с гарантией.",
  },
  {
    icon: Truck,
    title: "Быстрая поставка",
    description: "Большой склад в наличии. Заказ редких позиций от 24 часов.",
  },
  {
    icon: Headphones,
    title: "Консультации",
    description: "Поможем подобрать подшипник по размерам, номеру или применению.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Наши преимущества
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4 text-foreground">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Работаем с физическими лицами и организациями. Оптовые и розничные продажи.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card rounded border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mb-4 rounded bg-primary/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
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
