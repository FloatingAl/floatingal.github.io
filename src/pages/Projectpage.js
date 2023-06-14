import React from 'react'
import { motion } from "framer-motion"

function Projectpage() {
  return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    //exit={{opacity: 0}}
    transition={{ duration: 0.75, ease: "easeInOut"}}>
    Projectpage
  </motion.div>
  )
}

export default Projectpage
