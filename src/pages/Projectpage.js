import React from 'react'
import { useState, useRef} from 'react';
import { motion } from "framer-motion"
import Projectcard from '../components/Projectcard';
import CanvasRender from '../components/3drender';



function Projectpage() {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    //exit={{opacity: 0}}
    transition={{ duration: 0.75, ease: "easeInOut"}}>
    <div className="flex flex-wrap flex-col container overflow-hidden items-center justify-between p-6 m-auto font-mono">
      <div className="m-auto container text-start items-start text-5xl"> 
        <h1>projects</h1>
      </div>
      </div>
      <div className='flex'>
        <motion.div className='grid p-6 gap-x-6 gap-y-8 lg:grid-cols-2 overflow-x-auto md:grid-cols-1 max-[640px]:grid-cols-1 m-auto'>
          <Projectcard/>
          <Projectcard/>
          <Projectcard/>
          <Projectcard/>
        </motion.div> 
    </div>
  </motion.div>
  )
}

export default Projectpage
