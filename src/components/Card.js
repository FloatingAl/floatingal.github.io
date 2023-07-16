import { transform } from 'framer-motion';
import React, { useState } from 'react'
import { ReactComponent as Cpluspluslogo } from '../images/c++.svg'
import { ReactComponent as Pythonlogo } from '../images/python.svg'
import { ReactComponent as Dockerlogo } from '../images/docker.svg'
import { ReactComponent as Postgresqllogo } from '../images/postgresql.svg'
import { ReactComponent as Reactlogo } from '../images/react.svg'
import { ReactComponent as Javascriptlogo } from '../images/javascript.svg'

export default function Card({logo, company, duration, title, technologies, bullets}) {

  const [isFlipped, setisFlipped] = useState(false)

  const handleclick = () => {
      setisFlipped(!isFlipped)
      console.log(isFlipped)
  };

  const renderLogo = () => {
    return Object.entries(technologies).map(([key, value]) => (
        <div className='flex flex-col space-y-2'>
          <div key={Math.random()} className="shadow-2xl p-3 rounded-full bg-white m-auto">
            {value}
          </div>
          <div key={Math.random()} className='shadow-2xl rounded-full bg-white text-xs p-1 '>
              <span key={Math.random()}>{key}</span>
          </div>
        </div>

    ));
  };

  const renderBullet = () => {
    return bullets.map((item,index) => (
      <li key={Math.random()}>{item}</li>
    ));
  };

  return (
  <div style={{perspective : '1000px' }}className={'w-97 h-97 max-[640px]:w-auto m-auto'}>
    <div style={{transform: isFlipped ? 'rotateY(180deg)' : ''}} className={'w-full h-full rounded-xl relative cursor-pointer transition-all duration-1000 shadow-xl [transform-style:preserve-3d]'} onClick={handleclick}>
      <div className={'flex flex-col space-y-5 absolute w-full h-full rounded-xl bg-purp items-center justify-center [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden'}>
        <div className='flex flex-col space-y-5 p-4'>
          <div className='p-6 bg-white rounded-full shadow-2xl '>
            {logo}
          </div>
          <div className='p-3 '>
            <div className='text-xl font-black text-white p-3'>
              <h1>{company} </h1>
            </div>
            <div className='text-m font-medium text-white p-3'>
              <p>{duration}</p>
            </div>
            <div className='text-m font-medium text-white p-3'>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex overflow-y-auto w-full h-full rounded-xl bg-white [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden [transform:rotateY(180deg)]'}>
        <div className={'w-full h-full items-center justify-center'}>
          <div className={'bg-purp relative'}>
            <div className='pt-6 m-auto'>
              <p className='p-3 font-bold shadow-2xl inline-block bg-white rounded-full'>Technologies</p>
            </div>
            <div className={'flex flex-row flex-wrap p-6 space-x-3 m-auto items-center justify-center'}>
              {renderLogo()}
            </div>
          </div>
          <div className={'flex flex-wrap text-justify p-6'}>
            <ul className={'list-disc md:text-md text-xs space-y-2'}>
            {renderBullet()}
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
  )
}
