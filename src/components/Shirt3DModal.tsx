import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ShirtDesign } from "@/data/shirts";
import Shirt3D from "./Shirt3D";

interface Shirt3DModalProps {
  shirt: ShirtDesign | null;
  isOpen: boolean;
  onClose: () => void;
}

const Shirt3DModal = ({ shirt, isOpen, onClose }: Shirt3DModalProps) => {
  if (!shirt) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-6xl h-[80vh] bg-card rounded-2xl shadow-large overflow-hidden"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {shirt.title}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {shirt.description}
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>
            </div>

            {/* 3D Viewer */}
            <div className="pt-24 h-full">
              <Shirt3D textureUrl={shirt.image} />
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {shirt.category}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {shirt.price}
                  </span>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>
                    🖱️ Click and drag to rotate • 🔍 Scroll to zoom • 📱 Touch
                    to interact
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Shirt3DModal;
