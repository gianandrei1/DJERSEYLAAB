import { useState } from 'react';
import { ShirtDesign } from '@/data/shirts';
import Hero from '@/components/Hero';
import ShirtGallery from '@/components/ShirtGallery';
import Shirt3DModal from '@/components/Shirt3DModal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [selectedShirt, setSelectedShirt] = useState<ShirtDesign | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShirtSelect = (shirt: ShirtDesign) => {
    setSelectedShirt(shirt);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedShirt(null), 300); // Delay to allow exit animation
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ShirtGallery onShirtSelect={handleShirtSelect} />
      <Contact />
      <Footer />
      
      <Shirt3DModal 
        shirt={selectedShirt}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
