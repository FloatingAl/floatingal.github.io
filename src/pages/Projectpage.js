import React from 'react'
import { useState, useRef} from 'react';
import { motion } from "framer-motion"
import { Canvas, useFrame } from '@react-three/fiber'
import Box from '../components/3drender';



function Projectpage() {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    //exit={{opacity: 0}}
    transition={{ duration: 0.75, ease: "easeInOut"}}>
    <div className='m-auto h-[65vh] items-center justify-center place-content-center'>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  </motion.div>
  )
}

export default Projectpage
