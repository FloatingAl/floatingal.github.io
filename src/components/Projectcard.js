import { LayoutGroup } from 'framer-motion'
import React from 'react'
import quickster from '../images/quickster.png'

export default function Projectcard() {
  return (
    <button id='card' className='flex flex-col justify-end w-97 h-99 basis:1/2 bg-black max-[640px]:w-auto m-auto !z-50 opacity-100 relative shadow-2xl rounded-2xl overflow-hidden'>
        <img className= 'w-full h-full object-cover m-auto !z-30 opacity-30 relative' src={quickster}></img>
        <div className='text-left rounded-b-2xl m-auto absolute !z-40 bottom-0 px-4 py-3 w-full'>
            <h1 className='font-extrabold text-white text-3xl'>Quickster</h1>
            <p className='text-cgray' >An web application to find the best efficent route based on a set of addresses.</p>
            <div className='flex flex-wrap flex-row gap-3'>
                <span>React</span>
                <span>Javascript</span>
                <span>API</span>
            </div>
        </div>
    </button>
  )
}
