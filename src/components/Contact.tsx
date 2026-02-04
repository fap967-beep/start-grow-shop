import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Контакты
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4 text-foreground">
            Свяжитесь с нами
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Позвоните или оставьте заявку — мы поможем подобрать нужные подшипники
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 bg-card rounded border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Телефоны</h3>
                  <a href="tel:+74842560929" className="block text-primary hover:underline mb-1">
                    (4842) 56-09-29
                  </a>
                  <a href="tel:+74842333435" className="block text-primary hover:underline">
                    (4842) 33-34-35
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Адрес</h3>
                  <p className="text-foreground">г. Калуга, ул. Тульская, 102</p>
                  <p className="text-sm text-muted-foreground mt-1">ИП Зимина О.Н.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground">Режим работы</h3>
                  <p className="text-foreground">Пн–Пт: 9:00 – 18:00</p>
                  <p className="text-foreground">Сб: 9:00 – 15:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-6 bg-card rounded border border-border"
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-foreground">
              Оставить заявку
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Какие подшипники вам нужны?
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Укажите номер, размеры или назначение"
                  className="w-full px-4 py-3 bg-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
              >
                Отправить заявку
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
