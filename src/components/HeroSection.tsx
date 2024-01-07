"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
const HeroSection = () => {
  return (
    <section id="home">
        <div className = "flex flex-col text-center items-center justify-center my-10 py-16">
            <div>
                <Image className='rounded-full h-96 w-96 object-cover object-center' src = "/picture.png" alt="" width={300} height = {300}/>
            </div>
            <div>
                <h1 className="font-bold text-4xl mt-6">Hi, 👋 I&#39;m Calvin!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                A Software Developer based in Toronto, Canada. Currently a 
                Computer Engineering student @University of Waterloo
                </p>
                <Link
                    to="projects"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    Projects
                </Link>
            </div>
        </div>
        <div>
            
        </div>
    </section>  
)
}

export default HeroSection