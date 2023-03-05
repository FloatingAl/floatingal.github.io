import React from 'react'
import { useState, useEffect} from 'react'
import lion from '../images/lion-logo.svg'

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
                {select.home ? (<a href='#' onClick={()=>handleSelect('home')}className="block rounded px-2 py-1 bg-bright-red text-white mx-auto">
                about
                </a>) 
                : 
                (<a href='#'  onClick={()=>handleSelect('home')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                about
                </a>)}

                {select.technologies ? (<a href='#' onClick={()=>handleSelect('technologies')} className="block rounded px-2 py-1 text-white bg-bright-red mx-auto">
                technologies
                </a>) 
                :  
                (<a href='#'  onClick={()=>handleSelect('technologies')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                technologies
                </a>) 
                }

                {select.projects ? <a href='#' onClick={()=>handleSelect('projects')} className="block rounded px-2 py-1 text-white bg-bright-red mx-auto" >
                projects
                </a>
                :
                <a href='#' onClick={()=>handleSelect('projects')} className="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto" >
                projects
                </a>}
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