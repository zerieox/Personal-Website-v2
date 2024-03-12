"use client"
import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from 'next/image';

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { useTheme } from "next-themes"
import wenueat from "../../public/wenu.png"
import magna from "../../public/magna.png"

const expData = [
    {
      title: "Software Developer - WENU",
      location: "Toronto, ON",
      description:
        "• Spearheaded the development of a marketplace chat service using Twilio, React, PHP and Figma",
        icon: <Image src={wenueat} alt="Wenu" style={{ width: '100%', height: 'auto' }} />,
        date: " Sep 2023 - Dec 2023 ",
    },
      {
        title: "Software Developer - Magna",
        location: "Newmarket, ON",
        description:
          "• Worked on many projects some of which included developing code for a website using Javascript and Flask as well as writing python scripts for various autonomous tasks",
          icon: <Image src={magna} alt="Magna" style={{ width: '70%', height: '70%' }} layout="fixed" />,
          date: " Jan 2023 - May 2023 ",
      },
      
]
const Experience = () => {
const { theme } = useTheme();

  return (
    <section id = "experiences">
      <div className = "my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className='text-center font-bold text-4xl'>
            About me
            <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>
        <br />
        <VerticalTimeline lineColor="#e5e7eb" >
        {expData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                boxShadow: "0 0 0 4px #e5e7eb, 0 0 0 8px white",
              }}
              visible={true}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
      </div>

    </section>
  )
}

export default Experience