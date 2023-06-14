import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Techpage from './pages/Techpage';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Projectpage from './pages/Projectpage';
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
    <div className="App">
      <Navbar/>
      <AnimatedRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
