import { transform } from 'framer-motion';
import React, { useState } from 'react'
import { ReactComponent as Cpluspluslogo } from '../images/c++.svg'
import { ReactComponent as Pythonlogo } from '../images/python.svg'
import { ReactComponent as Dockerlogo } from '../images/docker.svg'
import { ReactComponent as Postgresqllogo } from '../images/postgresql.svg'

export default function Card() {

  const [isFlipped, setisFlipped] = useState(false)

  const handleclick = () => {
      setisFlipped(!isFlipped)
      console.log(isFlipped)
  };


  return (
  <div style={{perspective : '1000px' }}className={'w-97 h-97 m-auto'}>
    <div style={{transform: isFlipped ? 'rotateY(180deg)' : ''}} className={'w-full h-full rounded-xl relative cursor-pointer transition-all duration-1000 [transform-style:preserve-3d]'} onClick={handleclick}>
      <div className={'flex absolute w-full h-full rounded-xl bg-amber-500 items-center justify-center [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden'}>
        <p>BAE Systems </p>
      </div>
      <div className={'flex overflow-y-auto w-full h-full rounded-xl bg-smokey-white [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden [transform:rotateY(180deg)]'}>
        <div className={'w-full h-full items-center justify-center'}>
          <div className={'bg-amber-500 relative'}>
            <div className='pt-6 m-auto'>
              <p className='p-2 shadow-2xl inline-block bg-white rounded-full'>Technologies</p>
            </div>
            <div className={'flex flex-row flex-wrap p-6 space-x-3 m-auto items-center justify-center'}>
              <div className='flex flex-col space-y-2'>
                <div className="shadow-2xl p-2 rounded-full bg-white m-auto">
                  <Cpluspluslogo/>
                </div>
                <div className='shadow-2xl rounded-full bg-white text-xs p-1 '>
                  <span>C++</span>
                </div>
              </div>
              <div className='flex flex-col space-y-2'>
                <div className="shadow-2xl p-2 rounded-full bg-white m-auto">
                  <Pythonlogo/>
                </div>
                <div className='shadow-2xl rounded-full bg-white text-xs p-1'>
                  <span>Python</span>
                </div>
              </div>
              <div className='flex flex-col space-y-2'>
                <div className="shadow-2xl p-2 rounded-full bg-white m-auto">
                  <Dockerlogo/>
                </div>
                <div className='shadow-2xl rounded-full bg-white text-xs p-1'>
                  <span>Docker</span>
                </div>
              </div>
              <div className='flex flex-col space-y-2'>
                <div className="shadow-2xl p-2 rounded-full bg-white m-auto">
                  <Postgresqllogo/>
                </div>
                <div className='shadow-2xl rounded-full bg-white text-xs p-1'>
                  <span>Postgresql</span>
                </div>
              </div>
            </div>
          </div>
          <div className={'flex flex-wrap text-justify p-6'}>
            <ul className={'list-disc text-xs space-y-2'}>
              <li>Maintain and extend software running on radio platforms used to translate coordinates and communicate between multiple devices.</li>
              <li>Created a web application that alerts and monitors live network traffic between multiple radio platforms to measure better metrics using React.js and PostgreSQL.</li>
              <li>Developed new features and tools in C++ for aircraft control & messaging systems used in real-time using Python.</li>
              <li>Refactored and decoupled multiple core legacy components to utilize newer developer tools, resulting in over 30% reduction in build time and faster testing.</li>
              <li>Lead & migrated CI/CD environment from BitBucket to Gitlabs to gain access to better tools and  functionality such as Docker.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}
