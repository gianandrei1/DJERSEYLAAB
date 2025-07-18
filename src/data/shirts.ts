import shirtCircuit from '@/assets/darkabu.png';
import shirtBinary from '@/assets/abuwhite.png';
import shirtHexagon from '@/assets/shirt-hexagon.jpg';
import shirtCode from '@/assets/shirt-code.jpg';
import shirtNeural from '@/assets/shirt-neural.jpg';
import shirtPixel from '@/assets/shirt-pixel.jpg';

export interface ShirtDesign {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

export const shirtDesigns: ShirtDesign[] = [
  {
    id: "ABUDARK BLUE JESREY",
    title: "ABU Dark Blue Jersey",
    description: "Kasilay Tournament 2025",
    image: shirtCircuit,
    category: "ABU",
    price: "Designer: Gian"
  },
  {
    id: "ABUWHITE JERSEY",
    title: "ABU White Jersey",
    description: "Unreleased",
    image: shirtBinary,
    category: "ABU",
    price: "Designer: Gian"
  },
  {
    id: "unknown",
    title: "TBD",
    description: "TBD",
    image: shirtHexagon,
    category: "TBD",
    price: "TBD"
  },
  {
      id: "unknown",
    title: "TBD",
    description: "TBD",
    image: shirtHexagon,
    category: "TBD",
    price: "TBD"
  },
  {
    id: "unknown",
    title: "TBD",
    description: "TBD",
    image: shirtHexagon,
    category: "TBD",
    price: "TBD"
  },
  {
    id: "unknown",
    title: "TBD",
    description: "TBD",
    image: shirtHexagon,
    category: "TBD",
    price: "TBD"
  }
];