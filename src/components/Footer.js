import React from 'react'
import dancinglol  from '../images/dancing.gif'

export default function Footer() {
  return (
  <footer id="footer"className='flex flex-wrap border-2 border-gray mt-auto left-0 bottom-0 w-full items-center justify-center h-12 shadow-2xl drop-shadow-2xl bg-white '>
    <div className='font-sans font-extrabold'> Made with</div>
    <div className=' w-8 h-10'>
      <img src={dancinglol} alt="Its peanut butter jelly time" className="w-48 h-auto rounded-xl shadow-lg" />
    </div>
  </footer>
  )
}
