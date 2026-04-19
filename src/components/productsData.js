import handbag1 from './images/handbag1.jpeg';
import handbag2 from './images/handbag2.jpg';
import handbag3 from './images/handbag3.jpg';
import backpack1 from './images/backpack1.jpg';
import backpack2 from './images/backpack2.jpg';
import backpack3 from './images/backpack3.jpg';

export const homeProducts = [
  {
    id: 'handbag-1',
    category: 'Hand Bags',
    name: 'Classic Leather Shoulder Handbag',
    price: 'Rs. 4,999.99',
    description:
      'Premium shoulder handbag made with durable leather, soft inner lining, and roomy storage for daily essentials.',
    image: handbag1,
  },
  {
    id: 'handbag-2',
    category: 'Hand Bags',
    name: 'Rose Pink Double Strap Tote',
    price: 'Rs. 5,999.99',
    description:
      'A stylish double strap tote with elegant rose pink finish. Perfect for office, casual outings, and travel use.',
    image: handbag2,
  },
  {
    id: 'handbag-3',
    category: 'Hand Bags',
    name: 'Elegant Messenger Hand Bag',
    price: 'Rs. 6,999.99',
    description:
      'Modern messenger-style handbag with multiple compartments, smooth zip closure, and comfortable carry support.',
    image: handbag3,
  },
  {
    id: 'backpack-1',
    category: 'Back Pack',
    name: 'Travel Laptop Backpack',
    price: 'Rs. 3,999.99',
    description:
      'Multi-layer laptop backpack designed for travel with secure compartments, water-resistant finish, and ergonomic comfort.',
    image: backpack1,
  },
  {
    id: 'backpack-2',
    category: 'Back Pack',
    name: 'Unisex Blue PU Backpack',
    price: 'Rs. 4,999.99',
    description:
      'Smart unisex blue backpack built with PU leather accents and ample capacity for daily office or college use.',
    image: backpack2,
  },
  {
    id: 'backpack-3',
    category: 'Back Pack',
    name: 'Soundcore Casual Backpack',
    price: 'Rs. 5,999.99',
    description:
      'Reliable casual backpack with lightweight build and organized space for books, gadgets, and accessories.',
    image: backpack3,
  },
];

export const getProductById = (id) => homeProducts.find((product) => product.id === id);
