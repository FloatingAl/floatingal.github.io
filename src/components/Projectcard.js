import { LayoutGroup } from 'framer-motion'
import React from 'react'
import quickster from '../images/quickster.png'

export default function Projectcard() {
  return (
    <div id='card' className='flex flex-col justify-end w-97 h-99 basis:1/2 max-[640px]:w-auto m-auto relative shadow-2xl rounded-2xl overflow-hidden'>
        <img className= 'w-full h-full m-auto relative ' src={quickster}></img>
        <div className='text-left rounded-b-2xl m-auto absolute !z-[999] opacity-100 bottom-0 px-4 py-3 w-full'>
            <h1 className='font-extrabold text-white text-3xl'>Quickster</h1>
            <p className='text-cgray' >An web application to find the best efficent route based on a set of addresses.</p>
        </div>
    </div>
  )
}
