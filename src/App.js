import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartOne from './components/PartOne';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Slider from './components/slider';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CategoryProductsPage from './components/CategoryProductsPage';


function HomePage() {
  return (
    <>
      <PartOne />
      <Footer />
      <Slider />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/categories/backpack"
            element={<CategoryProductsPage title="Back Pack" />}
          />
          <Route
            path="/categories/hand-bags"
            element={<CategoryProductsPage title="Hand Bags" />}
          />
          <Route
            path="/categories/kids-bags"
            element={<CategoryProductsPage title="Kids Bags" />}
          />
          <Route
            path="/categories/luggages"
            element={<CategoryProductsPage title="Luggages" />}
          />
          <Route
            path="/categories/wallets"
            element={<CategoryProductsPage title="Wallets" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
