import React from 'react'
import { useState, useEffect} from 'react'
import lion from '../images/lion-logo.svg'
import { Link } from 'react-router-dom';

function Navbar() {
  const [select, setSelect] = useState({
    home:true,
    technologies:false,
    projects: false,
  })

  const handleSelect = (selection) => {
    console.log(selection)
    switch(selection){
      case 'home':
        setSelect({
          ...select,
          home: true,
          technologies: false,
          projects: false,
        });
        break;
      case 'technologies':
        setSelect({
          ...select,
          home: false,
          technologies: true,
          projects: false,
        });
        break;
      case 'projects':
        setSelect({
          ...select,
          home: false,
          technologies: false,
          projects: true,
        });
        break;
    };
    


  }

  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
        <div className="flex flex-wrap items-center justify-between space-x-5 mx-auto">
            <img src={lion} className=" inline-block items-center h-14 w-14 mx-auto"></img>
            <div className="flex flex-wrap items-center justify-between space-x-6 mx-auto">
                {select.home ? (<Link to='/' onClick={()=>handleSelect('home')}className="block rounded px-2 py-1 bg-bright-red text-white mx-auto">
                about
                </Link>) 
                : 
                (<Link to="/"  onClick={()=>handleSelect('home')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                about
                </Link>)}

                {select.technologies ? (<Link to='/tech' onClick={()=>handleSelect('technologies')} className="block rounded px-2 py-1 text-white bg-bright-red mx-auto">
                technologies
                </Link>) 
                :  
                (<Link to='/tech'  onClick={()=>handleSelect('technologies')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                technologies
                </Link>) 
                }

                {select.projects ? <Link to='project' onClick={()=>handleSelect('projects')} className="block rounded px-2 py-1 text-white bg-bright-red mx-auto" >
                projects
                </Link>
                :
                <Link to='project' onClick={()=>handleSelect('projects')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto" >
                projects
                </Link>}
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