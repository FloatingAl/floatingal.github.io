import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Projectpage from './pages/Projectpage';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter basename='/portfolio' forceRefresh={true}>
    <div className="App">
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
