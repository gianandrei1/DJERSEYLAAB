import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">D Jersey Lab</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Built for the field, designed to stand out.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Designs
                </a>
              </li>
              <li>
                <a
                  href="mailto:gelaygian@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Custom Orders
                </a>
              </li>
              <li>
                <a
                  href="https://shopee.ph/gians.shirtlab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                ></a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Sports</li>
              <li className="text-primary-foreground/80">Ultimate Frisbee</li>
              <li className="text-primary-foreground/80">Basketball</li>
              <li className="text-primary-foreground/80">Running</li>
              <li className="text-primary-foreground/80">Lifestyle</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <motion.div
            className="text-center text-primary-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">© 2024 D Jersey Lab. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
