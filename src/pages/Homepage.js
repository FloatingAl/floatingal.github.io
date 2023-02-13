import React from 'react'
import Navbar from '../components/Navbar'
import face from '../images/faceprofile.jpg'

function Homepage() {
  return (
    <div>
        <Navbar/>
        <div class="flex flex-wrap flex-col container grid items-center justify-between p-6 m-auto font-mono">
          <h1 class="text-start text-5xl">about</h1>
          <div class="flex flex-wrap flex-row container items-center content-center justify-center p-6">
            <div class="flex flex-none container m-auto lg:w-1/2 md:w-full content-center justify-center">
              <img src={face} id='face' class="" ></img>
            </div>
            <div class="mx-auto space-y-5 p-4 lg:basis-1/2 md:basis-full sm:basis-full flex flex-col text-justify">
              <h2 class="text-left text-2xl ">Hello my name is <h1 class="text-left text-5xl">Albara Mehene</h1></h2>
              <p class="">Currently a full stack software engineer working at BAE systems. Experienced working in mobile & web, back-end, 
                & application development. Skilled in C++, React, Javascript, Python, Automation, Databases, and Embedded systems. 
                Currently interested in Full stack development, cloud software development, and embedded development.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Homepage