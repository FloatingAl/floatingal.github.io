import React from 'react'
import CanvasRender from './3drender'

export default function Footer() {
  return (
  <footer className='flex flex-wrap mt-auto left-0 bottom-0 w-full items-center justify-center h-12 shadow-2xl drop-shadow-2xl bg-smokey-white '>
    <div className='font-mono font-extrabold'> Made with</div>
    <div className=' w-16 h-12'>
      <CanvasRender/>
    </div>
  </footer>
  )
}
