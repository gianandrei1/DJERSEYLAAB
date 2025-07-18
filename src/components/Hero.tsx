import { motion } from "framer-motion";
import sportsIconsBg from "@/assets/athlit.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={sportsIconsBg}
          alt="Sports icons background"
          className="w-full h-full object-cover opacity-0"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-background/50" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground mb-8 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          D Jersey Lab
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button
            onClick={() => {
              document.getElementById("gallery")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-medium hover:shadow-large hover:scale-105"
          >
            Explore Designs
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
