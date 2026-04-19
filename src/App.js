import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartOne from './components/PartOne';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Slider from './components/slider';
import FeaturesSection from './components/FeaturesSection';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import CategoryProductsPage from './components/CategoryProductsPage';
import SearchResults from './components/SearchResults';


function HomePage() {
  return (
    <>
      <PartOne />
      <Slider />
      <FeaturesSection />
      <Footer />
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
          <Route path="/search" element={<SearchResults />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
