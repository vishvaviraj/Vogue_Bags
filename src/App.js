import './App.css';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartOne from './components/PartOne';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Slider from './components/slider';
import HomeProductsSection from './components/HomeProductsSection';
import FeaturesSection from './components/FeaturesSection';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CategoryProductsPage from './components/CategoryProductsPage';
import SearchResults from './components/SearchResults';
import ProductDetailsPage from './components/ProductDetailsPage';
import CartPage from './components/CartPage';


function HomePage({ onAddToCart }) {
  return (
    <>
      <PartOne />
      <Slider />
      <HomeProductsSection onAddToCart={onAddToCart} />
      <FeaturesSection />
      <Footer />
    </>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('vogue-cart-items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('vogue-cart-items', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const totalCartQuantity = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const handleLoginSuccess = (user, token) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('authUser', JSON.stringify(user));
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    setCurrentUser(null);
  };

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar cartCount={totalCartQuantity} currentUser={currentUser} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={handleAddToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route
            path="/product/:productId"
            element={<ProductDetailsPage onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
          <Route
            path="/categories/backpack"
            element={<CategoryProductsPage title="Back Pack" onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/categories/hand-bags"
            element={<CategoryProductsPage title="Hand Bags" onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/categories/kids-bags"
            element={<CategoryProductsPage title="Kids Bags" onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
