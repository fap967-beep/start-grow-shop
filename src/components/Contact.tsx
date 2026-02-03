import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
            Контакты
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4">
            Свяжитесь с <span className="text-gradient-gold">нами</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Готовы обсудить ваш проект? Напишите нам, и мы ответим в ближайшее время.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Телефоны</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+74842560929" className="hover:text-accent transition-colors">(4842) 56-09-29</a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:+74842333435" className="hover:text-accent transition-colors">(4842) 33-34-35</a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Калуга, ул. Тульская, 102
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  ИП Зимина О.Н.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-muted-foreground">Сб: 10:00 - 15:00</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Сообщение"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-4 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium bg-accent text-accent-foreground rounded-xl hover:opacity-90 transition-opacity"
            >
              Отправить сообщение
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
