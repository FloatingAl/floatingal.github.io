import React from 'react'
import Navbar from '../components/Navbar'
import { ReactComponent as Cpluspluslogo } from '../images/c++.svg'
import { ReactComponent as Clogo } from '../images/c.svg' 
import { ReactComponent as Javascriptlogo } from '../images/javascript.svg'
import { ReactComponent as Reactlogo } from '../images/react.svg'
//import { ReactComponent as Csslogo } from '../images/css.svg'
import { ReactComponent as Tailwindlogo } from '../images/tailwind.svg'
import { motion } from "framer-motion"


function Techpage() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //exit={{opacity: 0}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <div className="container mx-auto items-center justify-between p-6 font-mono">
        <h1 className="text-start text-6xl">technologies</h1>
        <div className='grid gap-8 pt-32 sm:grid-cols-1 md:grid-cols-2 m-auto'>  
          <div class="flex flex-row ">
            <div class="h-32 w-32">
              <Cpluspluslogo/>
            </div>
            <h1 className='my-auto'>C++</h1>
          </div>

          <div class=" flex flex-row ">
            <div class="h-32 w-32">
              <Clogo/>
            </div>
            <p className='my-auto'>Hello its me C++</p>
          </div>

          <div class="flex flex-row ">
            <div class="h-32 w-32 object-contain">
              <Javascriptlogo/>
            </div>
            <p className='my-auto'>Hello its me C++</p>
          </div>

          <div class="flex flex-row ">
            <div class="h-32 w-32 object-contain">
              <Reactlogo/>
            </div>
            <p className='my-auto'>Hello its me C++</p>
          </div>
          
          <div class="flex flex-row ">
            <div class="h-32 w-32 object-contain">
              <Tailwindlogo/>
            </div>
            <p className='my-auto'>Hello its me C++</p>
          </div>
        </div>
      </div>  
    </motion.div>
  )
}

export default Techpage

