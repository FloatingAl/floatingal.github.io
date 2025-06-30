import React from 'react'
import { useState, useEffect} from 'react'
import lion from '../images/lion-logo.svg'
import w_lion from '../images/lion.svg'
import { NavLink} from 'react-router-dom';

function Navbar() {
  

  return (
    <nav className="flex flex-wrap items-center sticky top-0 justify-between p-4 !z-[999] border-b border-2 border-gray-100 bg-bigwhite ">
        <div className="flex flex-wrap items-center justify-between space-x-5 mx-auto">
            <a href="" className=" inline-block items-center h-14 w-14 mx-auto">
              <img src={w_lion}></img>
            </a>
            <div className="flex flex-wrap items-center justify-between space-x-6 mx-auto">
              <a href="#about" className="block rounded px-2 py-1 hover:text-white hover:bg-bigorange mx-auto">
                about
              </a>
              <a href="#work" className="block rounded px-2 py-1 hover:text-white hover:bg-bigorange mx-auto">
                work experience
              </a>
              <a href="#projects" className="block rounded px-2 py-1 hover:text-white hover:bg-bigorange mx-auto">
                projects
              </a>
            </div>
            <div>
                <a>

                </a>
                <a>

                </a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar