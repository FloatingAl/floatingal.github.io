import React from 'react'
import quickster from '../images/quickster.png'
import { projectdata } from '../data/projectdata'
import { motion } from "framer-motion"

export default function Projectcard() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
            
          }
        }
      };
      
      const item = {
        hidden: { x : 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
    
      const techloop = (tech) => {
        const techstack = []
        for(const name in tech){
            
            techstack.push (
                <span key={name} className='text-white py-1 px-4 rounded-full bg-[#696869]'>{tech[name]}</span>
            )
        }
        return techstack
    }

    const generateCards = () => {
        const allprojects = [];
        for(const project in projectdata){
            const projectName = project;
            const projectDes = projectdata[project]["description"];
            const projectImg = projectdata[project]["img"];
            const projectTech = projectdata[project]["technologies"];
            const projectUrl = projectdata[project]["url"];
            
            allprojects.push (
            <motion.div
            key={projectUrl} 
            className='overflow-hidden'
            variants={item}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              staggerChildren: 0.2
            }}>
                <a key={projectUrl} href={projectUrl} rel="noreferrer" target="_blank" className=''>
                    <button id='card' className='flex flex-col justify-end w-97 h-99 basis:1/2 bg-black max-[640px]:w-auto m-auto !z-50 opacity-100 relative shadow-2xl rounded-2xl overflow-hidden'>
                        <img className= 'w-full h-full object-cover m-auto !z-30 opacity-30 relative' src={projectImg}></img>
                        <div className='text-left rounded-b-2xl m-auto absolute !z-40 bottom-0 px-4 py-3 w-full'>
                            <h1 className='font-extrabold text-white text-3xl'>{projectName}</h1>
                            <p className='text-cgray' >{projectDes}</p>
                            <div className='flex flex-wrap flex-row gap-3 py-3'>
                                {techloop(projectTech)}
                            </div>
                        </div>
                    </button>
                </a>
            </motion.div>
            );
        }

        return allprojects
    }
    
  return (
    <motion.div 
    className='grid p-6 overflow-hidden gap-x-6 gap-y-8 no-scrollbar lg:grid-cols-2 overflow-x-auto md:grid-cols-1 max-[640px]:grid-cols-1 m-auto'
    variants={container}
    initial="hidden"
    animate="visible"
    >
       {generateCards()}
    </motion.div>
  )
}
