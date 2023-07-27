import React from 'react'
import { useState, useEffect} from 'react'
import lion from '../images/lion-logo.svg'
import w_lion from '../images/purple_lion.svg'
import { NavLink} from 'react-router-dom';

function Navbar() {
  const [select, setSelect] = useState({
    home:true,
    technologies:false,
    projects: false,
  })
  const navLinkActive = ({ isActive }) => {
    return{
      backgroundColor: isActive ? '#7510f7' : '',
      color: isActive ? 'white' : '',

    }
 };
  

  return (
    <nav className="flex flex-wrap items-center sticky top-0 justify-between p-4 !z-[999] border-b border-black bg-smokey-white ">
        <div className="flex flex-wrap items-center justify-between space-x-5 mx-auto">
            <a href="https://www.albaramehene.com" className=" inline-block items-center h-14 w-14 mx-auto">
              <img src={w_lion}></img>
            </a>
            <div className="flex flex-wrap items-center justify-between space-x-6 mx-auto">
                <NavLink to="/" style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-purp mx-auto">
                about
                </NavLink>
                <NavLink to='/work' style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-purp mx-auto">
                work experience
                </NavLink>
                <NavLink to='project' style={navLinkActive} className="block rounded px-2 py-1 hover:text-white hover:bg-purp mx-auto" >
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