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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
