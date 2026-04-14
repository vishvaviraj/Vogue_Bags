import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PartOne from './components/PartOne';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Slider from './components/slider';
import ContactPage from './components/ContactPage';


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
      <div style={{ backgroundColor: '#c8daec', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
