"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import {HiArrowDown} from "react-icons/hi"
const HeroSection = () => {
  return (
    <section id="home">
        <div className = "flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <div className="md:mt-2 md:w-1/2"> 
            <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/portrait.png"
                alt="Calvin"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
            <div className="md:mt-2 md:w-3/5">
                <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi,👋 I&#39;m Calvin!</h1>
                <p className="text-lg mt-4 mb-6 md:text-2xl">
                A <span className="font-semibold text-sky-400">Software Developer</span> based in Toronto, Canada. Currently a 
                Computer Engineering student @University of Waterloo
                </p>
                <Link
                    to="projects"
                    className="text-neutral-100 font-semibold px-6 py-3 bg-sky-500 rounded shadow hover:bg-sky-700"
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
        <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>  
)
}

export default HeroSection