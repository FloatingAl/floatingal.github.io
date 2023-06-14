import React, { Component } from 'react'
import { motion } from "framer-motion"
import Card from '../components/Card'

export default class Workpage extends Component {
  render() {
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //exit={{opacity: 0}}
      transition={{ duration: 0.75, ease: "easeInOut"}}
    >
      <div className='m-auto items-center justify-center place-content-center p-6 font-mono'>
        <div className='flex flex-row flex-nowrap '>
          <Card/>
        </div>
        
      </div>
    </motion.div>
    )
  }
}
