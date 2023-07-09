import React from 'react'
import { useState, useEffect} from 'react'
import lion from '../images/lion-logo.svg'
import { NavLink} from 'react-router-dom';

function Navbar() {
  const [select, setSelect] = useState({
    home:true,
    technologies:false,
    projects: false,
  })
  const navLinkActive = ({ isActive }) => {
    return{
      backgroundColor: isActive ? '#c85e4c' : '',
      color: isActive ? 'white' : '',

    }
 };
  

  return (
    <nav className="flex flex-wrap items-center sticky top-0 justify-between p-6 border-b border-black z-50 bg-biege rounded-full">
        <div className="flex flex-wrap items-center justify-between space-x-5 mx-auto">
            <img src={lion} className=" inline-block items-center h-14 w-14 mx-auto"></img>
            <div className="flex flex-wrap items-center justify-between space-x-6 mx-auto">
                <NavLink to="/" style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                about
                </NavLink>
                <NavLink to='/work' style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                work experience
                </NavLink>
                <NavLink to='project' style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto" >
                projects
              </NavLink>
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