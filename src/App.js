import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
    <div className="App">
      <Navbar/>
      <AnimatedRoutes/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
