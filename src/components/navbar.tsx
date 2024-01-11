"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Experiences",
    page: "experiences",
  },
  {
    label: "Projects",
    page: "projects",
  },
]
const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  return (
    <header className="w-full mx-auto sm:px-20 px-4 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className = "flex items-center justify-between py-3">
            <div className = "md:py-5 md:block">
              <h2 className = "text-2xl font-bold">CZ</h2>
            </div>
            <div className = "md:hidden">
              <button onClick = {()=>setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
            >
            <div className = "items-center justify-center space-y-8 md:space-y-0 md:flex md:space-x-6">
              {NAV_ITEMS.map((item,index)=>{
                return(
                  <Link
                  key={index}
                  to={item.page}
                  className={
                    "block lg:inline-block text-neutral-900  hover:text-neutral-400 dark:text-neutral-100"
                  }
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setNavbar(!navbar)}
                >
                  {item.label}
                </Link>
                )
              })
              }
              {currentTheme === "dark" ? (
                <button 
                  onClick={()=>setTheme('light')}
                  className = "bg-state-100 p-2 rounded-xl">
                  <RiSunLine/>
                </button>
              ):
              (
                <button 
                  onClick={()=>setTheme('dark')}
                  className = "bg-state-100 p-2 rounded-xl">

                    <RiMoonFill/>
                  </button>
              )
                
              }
            </div>
          </div>
        </div>
      </div>
  </header>  
)
}

export default Navbar