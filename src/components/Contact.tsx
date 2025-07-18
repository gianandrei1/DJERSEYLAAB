import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "gelaygian@gmail.com",
      href: "mailto:gelaygian@gmail.com",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@heyhey.andr",
      href: "https://www.instagram.com/heyhey.andr/",
      color: "text-pink-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Gian Andrei Gelay",
      href: "https://www.facebook.com/gianandrei.gelay/",
      color: "text-blue-700",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got ideas for a custom jersey or questions about your design? Let’s
            team up and bring your game-ready vision to life!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-6 text-center hover:shadow-medium transition-all duration-300 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div
                className={`w-12 h-12 ${link.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {link.label}
              </h3>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                {link.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="bg-card rounded-2xl p-8 shadow-soft text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Custom Design Requests
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Got a bold concept or unique idea you want on a jersey? We craft
            custom designs that bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:gelaygian@gmail.com?subject=Custom Design Request"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Custom Design
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
