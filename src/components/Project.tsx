"use client"
import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import SlideUp from './SlideUp'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
      name: "Expense Tracker",
      description:
        "An expense tracker with graph display built with React, Express, and MongoDB",
      image: "/expense.png",
      github: "https://github.com/zerieox/Expense-Tracker",
      link: "https://tofinancialfreedom.vercel.app/"
    },
    {
      name: "Note Keeper",
      description:
        "A simple note keeping web app that allows me to keep track of things that I need to do throughout the day.",
      image: "/notekeeper.png",
      github: "https://github.com/zerieox/Note-Keeper",
      link: "https://github.com/zerieox/Note-Keeper"

    },
    {
      name: "Memory Game",
      description: "A memory game inspired by the simon game, user has to memorize the sequence of colours.",
      image: "/simongame.png",
      github: "https://github.com/zerieox/Simon-Game",
      link: "https://github.com/zerieox/Simon-Game"

    },
    
  ]
const Project = () => {
  return (
    <section id = "projects">
    <h1 className='text-center font-bold text-4xl'>
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
    </h1>
    <div className = "flex flex-col space-y-28">
        {projects.map((item, index)=>{
            return(
                <div key = {index}>
              <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className="mt-8 md:w-1/2">
                      <Link href = {item.link} target = "_blank">
                        <Image 
                                src={item.image}
                                alt=""
                                width={1000}
                                height={1000}
                                className = "rounded-xl shadow-xl hover:opacity-70"
                            />
                      </Link>
                          
                      </div>
                      <div className="mt-12 md:w-1/2">
                        <h1 className = "text-4xl font-bold mb-6">{item.name}</h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                          {item.description}
                        </p>
                        <div className="flex flex-row align-bottom space-x-4">
                          <Link href = {item.github} target = "_blank">
                            <BsGithub 
                              size={30}
                              className = "hover:-translate-y-1 transition-transform cursor-pointer"
                            />

                            
                          </Link>
                          <Link href = {item.github} target = "_blank"></Link>
                        </div>
                      </div>
                  </div>
                  </SlideUp>

                </div>
            )
        }
        
        )}
    </div>
    </section>  
    
    )
}

export default Project