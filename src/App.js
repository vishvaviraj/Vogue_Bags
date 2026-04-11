import logo from './logo.svg';
import './App.css';
import PartOne from './components/PartOne';
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import Slider from './components/slider';


function App() {
  return (
    <div style={{ backgroundColor: "#c8daec", minHeight: "100vh" }}>
      
      
      <Navbar />
      <PartOne />
      <Footer />
      <Slider />  
    </div>
  );
}

export default App;
