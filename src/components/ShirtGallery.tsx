import { motion } from "framer-motion";
import { shirtDesigns, ShirtDesign } from "@/data/shirts";
import ShirtCard from "./ShirtCard";

interface ShirtGalleryProps {
  onShirtSelect: (shirt: ShirtDesign) => void;
}

const ShirtGallery = ({ onShirtSelect }: ShirtGalleryProps) => {
  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Designs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our jersey collection — click any design to see it in 3D and
            up close!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shirtDesigns.map((shirt, index) => (
            <ShirtCard
              key={shirt.id}
              shirt={shirt}
              onClick={() => onShirtSelect(shirt)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShirtGallery;
