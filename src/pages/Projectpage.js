import React from 'react'
import { useState, useRef} from 'react';
import { motion } from "framer-motion"
import Projectcard from '../components/Projectcard';
import CanvasRender from '../components/3drender';
import { projectdata } from '../data/projectdata'



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
          <Projectcard/>
      </div>
  </motion.div>
  )
}

export default Projectpage
