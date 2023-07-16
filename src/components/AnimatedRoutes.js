import Homepage from '../pages/Homepage';
import Workpage from '../pages/Workpage';
import { Routes, Route, useLocation} from "react-router-dom";
import Projectpage from '../pages/Projectpage';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/portfolio' element={<Homepage/>}/>
            <Route path='/work' element={<Workpage/>}/>
            <Route path='/project' element={<Projectpage/>}/>
        </Routes> 
    </AnimatePresence>
  )
}

export default AnimatedRoutes