import Homepage from '../pages/Homepage';
import Workpage from '../pages/Workpage';
import { motion } from "framer-motion";
import Projectpage from '../pages/Projectpage';

function AnimatedRoutes() {
  return (
<div>
    <motion.section id="about" className='scroll-mt-20' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Homepage />
    </motion.section>

    <motion.section id="work" className='scroll-mt-20' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Workpage />
    </motion.section>

    <motion.section id="projects" className='scroll-mt-20' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <Projectpage />
    </motion.section>
    
  </div>
  )
}

export default AnimatedRoutes