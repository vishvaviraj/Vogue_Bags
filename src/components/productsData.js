import handbag1 from './images/handbag1.jpg';
import handbag2 from './images/handbag2.jpg';
import handbag3 from './images/handbag3.jpg';
import handbag4 from './images/handbag4.jpg';
import handbag5 from './images/handbag5.jpeg';
import backpack1 from './images/backpack1.jpg';
import backpack2 from './images/backpack2.jpg';
import backpack3 from './images/backpack3.jpg';
import backpack4 from './images/backpack4.jpg';
import backpack5 from './images/backpack5.jpg';
import bag1 from './images/bag1.jpg';
import bag2 from './images/bag2.jpeg';
import bag3 from './images/bag3.jpg';
import bag4 from './images/bag4.jpeg';
import bag5 from './images/bag5.avif';

export const categoryProducts = {
  'Hand Bags': [
    {
      id: 'handbag-1',
      category: 'Hand Bags',
      name: "Handbags For Women Shoulder Bags Casual Leather Messenger Bag Large Capacity Handbag Women's",
      image: handbag1,
      price: 'Rs. 5,999.99',
      description:
        'Large-capacity casual leather handbag with secure zip and comfortable shoulder carry.',
    },
    {
      id: 'handbag-2',
      category: 'Hand Bags',
      name: 'Home Ladies Purse Handbag The Perfect Double Strap Tote Rose Pink',
      image: handbag2,
      price: 'Rs. 5,999.99',
      description:
        'Double strap rose pink tote designed for daily office use and casual styling.',
    },
    {
      id: 'handbag-3',
      category: 'Hand Bags',
      name: 'Fashion Woman Bag Female Hand Tote Bag Messenger Shoulder Bag Lady HandBag',
      image: handbag3,
      price: 'Rs. 6,999.99',
      description:
        'Elegant messenger style tote with multiple compartments and smooth finish.',
    },
    {
      id: 'handbag-4',
      category: 'Hand Bags',
      name: 'IONIKK Shoulder Bag for Women Embroidered Women Leather Handbags Hand Bags For Women',
      image: handbag4,
      price: 'Rs. 7,999.99',
      description:
        'Premium embroidered leather shoulder bag with a bold fashion-forward look.',
    },
    {
      id: 'handbag-5',
      category: 'Hand Bags',
      name: 'Genuine Leather Luxury Ladies Handbag',
      image: handbag5,
      price: 'Rs. 8,999.99',
      description:
        'Luxury genuine leather handbag crafted for style, durability, and comfort.',
    },
  ],
  'Back Pack': [
    {
      id: 'backpack-1',
      category: 'Back Pack',
      name: 'JD Backpack Laptop Bag, Multi layer storage for fast travel.',
      image: backpack1,
      price: 'Rs. 3,999.00',
      description:
        'Multi-layer laptop backpack with quick-access pockets for travel and work.',
    },
    {
      id: 'backpack-2',
      category: 'Back Pack',
      name: 'AVI Unisex Backpack Blue, PU leather Travel Backpack',
      image: backpack2,
      price: 'Rs. 4,999.00',
      description:
        'Stylish blue unisex travel backpack with PU leather finish and spacious design.',
    },
    {
      id: 'backpack-3',
      category: 'Back Pack',
      name: 'JD soundcore Backpack',
      image: backpack3,
      price: 'Rs. 5,999.00',
      description:
        'Everyday casual backpack with strong build and smart internal organization.',
    },
    {
      id: 'backpack-4',
      category: 'Back Pack',
      name: 'Louiswill Laptop Backpack Water Resistant Bag Casual Business Laptop Bag',
      image: backpack4,
      price: 'Rs. 5,999.00',
      description:
        'Water-resistant business backpack ideal for laptops, files, and accessories.',
    },
    {
      id: 'backpack-5',
      category: 'Back Pack',
      name: 'Outdoor Waterproof Travel Backpack for, Laptop Bag, Climbing, Sports, Hiking Rucksack(C)',
      image: backpack5,
      price: 'Rs. 7,999.00',
      description:
        'Outdoor-ready waterproof rucksack built for climbing, sports, and hiking.',
    },
  ],
  'Kids Bags': [
    {
      id: 'kidsbag-1',
      category: 'Kids Bags',
      name: 'Stylbase Car Kids School Bags for Boys And Girls Printed Cartoon Water - Resistant Backpack for Kids',
      image: bag1,
      price: 'Rs. 1,999.99',
      description:
        'Fun cartoon print school bag with water-resistant material and light carry.',
    },
    {
      id: 'kidsbag-2',
      category: 'Kids Bags',
      name: 'Kids School Bag for Boys and Girls, Water Resistant, Lightweight and Durable',
      image: bag2,
      price: 'Rs. 2,999.99',
      description:
        'Durable lightweight kids school backpack with comfortable shoulder support.',
    },
    {
      id: 'kidsbag-3',
      category: 'Kids Bags',
      name: "Children's Backpack for School, Cute Cartoon Design, Multiple Pockets",
      image: bag3,
      price: 'Rs. 3,999.99',
      description:
        'Cute cartoon backpack featuring multiple pockets for books and lunch box.',
    },
    {
      id: 'kidsbag-4',
      category: 'Kids Bags',
      name: 'Toddler Backpack for Kids, Colorful and Fun Design, Easy to Carry',
      image: bag4,
      price: 'Rs. 4,999.99',
      description:
        'Colorful toddler backpack sized for easy carry and day-to-day essentials.',
    },
    {
      id: 'kidsbag-5',
      category: 'Kids Bags',
      name: 'Girls School Backpack, Lightweight and Durable, Multiple Compartments',
      image: bag5,
      price: 'Rs. 5,999.99',
      description:
        'Spacious school backpack with strong stitching and practical compartments.',
    },
  ],
};

export const homeProducts = [
  ...categoryProducts['Hand Bags'].slice(0, 3),
  ...categoryProducts['Back Pack'].slice(0, 3),
];

const allProducts = Object.values(categoryProducts).flat();

export const getProductById = (id) => allProducts.find((product) => product.id === id);
