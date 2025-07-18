import { motion } from "framer-motion";
import { ShirtDesign } from "@/data/shirts";

interface ShirtCardProps {
  shirt: ShirtDesign;
  onClick: () => void;
  index: number;
}

const ShirtCard = ({ shirt, onClick, index }: ShirtCardProps) => {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="aspect-square overflow-hidden rounded-t-xl">
        <img
          src={shirt.image}
          alt={shirt.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {shirt.category}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {shirt.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {shirt.description}
        </p>

        <div className="mt-4 flex items-center text-primary text-sm font-medium">
          <span>View in 3D</span>
          <motion.svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
};

export default ShirtCard;
