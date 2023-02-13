import React from 'react'
import lion from '../images/lion-logo.svg'

function Navbar() {
  return (
    <nav class="flex flex-wrap items-center justify-between p-6">
        <div class="flex flex-wrap items-center justify-between space-x-5 mx-auto">
            <img src={lion} class=" inline-block items-center h-14 w-14 mx-auto"></img>
            <div class="flex flex-wrap items-center justify-between space-x-6 mx-auto">
                <a href='#' class="block rounded px-2 py-1 hover:text-white hover:bg-bright-red mx-auto">
                about
                </a>
                <a href='#' class="block rounded px-2 py-1 hover:text-bright-red mx-auto">
                technologies
                </a>
                <a href='#' class="block rounded px-2 py-1 hover:text-bright-red mx-auto" >
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