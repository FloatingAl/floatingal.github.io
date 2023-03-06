import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Techpage from './pages/Techpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectpage from './pages/Projectpage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/tech' element={<Techpage/>}/>
        <Route path='/project' element={<Projectpage/>}/>
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App;
