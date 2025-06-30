import React, { useState } from 'react'

export default function Card({logo, company, duration, title, technologies, bullets}) {

  const [isFlipped, setisFlipped] = useState(false)

  const handleclick = () => {
      setisFlipped(!isFlipped)
      console.log(isFlipped)
  };

  const renderLogo = () => {
    return (
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
        {Object.entries(technologies).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center space-y-2 w-20">
            <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center bg-bigwhite shadow-md">
              {value}
            </div>
            <div className="text-xs text-center text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
              {key}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderBullet = () => {
    return bullets.map((item,index) => (
      <li key={Math.random()}>{item}</li>
    ));
  };

  return (
  <div style={{perspective : '1000px' }}className={'w-97 h-97 max-[640px]:w-96 max-[640px]:h-96 max-[640px]:w-auto m-auto'}>
    <div style={{transform: isFlipped ? 'rotateY(180deg)' : ''}} className={'w-full h-full rounded-xl relative cursor-pointer transition-all duration-1000 shadow-xl [transform-style:preserve-3d]'} onClick={handleclick}>
      <div className={'flex border-2 border-gray flex-col space-y-5 absolute w-full h-full rounded-xl bg-white items-center justify-center [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden shadow-2xl '}>
        <div className='flex flex-col space-y-5 p-4'>
          <div className='p-6 bg-white rounded-full  '>
            {logo}
          </div>
          <div className='p-3 '>
            <div className='text-xl font-black text-black p-3'>
              <h1>{company} </h1>
            </div>
            <div className='text-m font-medium text-black p-3'>
              <p>{duration}</p>
            </div>
            <div className='text-m font-medium text-black p-3'>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={'flex border-2 border-gray overflow-y-auto w-full h-full rounded-xl bg-white [backface-visibility:hidden] [-webkit-backface-visibility: hidden] overflow-hidden [transform:rotateY(180deg)]'}>
        <div className={'w-full h-full items-center justify-center'}>
          <div className={'bg-bigorange relative'}>
            <div className='pt-6 m-auto  max-[640px]:text-sm'>
              <p className='p-3 font-bold shadow-2xl inline-block bg-white rounded '>Technologies</p>
            </div>
            <div className={'flex flex-row flex-wrap p-4 space-x-4 m-auto justify-center'}>
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
