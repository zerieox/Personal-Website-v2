import React from 'react'
import Image from 'next/image'
const skills = [
    { skill: "JavaScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "C++"},
    { skill: "MySQL" },
    { skill: "Flask"},
    { skill: "Node.js"},
    {skill: "TypeScript" },
    { skill: "Next.js" },
    {skill: "Material-UI"},
    { skill: "Tailwind CSS" },
    { skill: "Git" },
  ]
const About = () => {
  return (
    <section id = "about">
        <div className = "my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className='text-center font-bold text-4xl'>
                About me
                <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10'>
                <div className='md:w-1/2'>
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                        Introduction
                    </h1>
                    <p>
                        Hi, I’m Calvin Zhao, a fourth-year Computer Engineering co-op student at the University of Waterloo. I’ve interned at Loblaw Digital, Wenu, and Magna International, where I deployed cloud micro services, built fullstack applications, and optimized data pipelines to deliver measurable impact.
                    </p>
                    <br />
                    <p>
                        I’m driven by a deep curiosity for technology and love turning ideas into production ready software. Some notable projects include an AI-powered booking workflow on Google Cloud, a Twilio backed marketplace chat at Wenu, and a Flask based material prediction app.
                    </p>
                    <br />
                    <p>
                        Outside of tech, I push my limits with my body with powerlifting and sports like volleyball and basketball. I also unwind by playing video games, my favourites being Zelda: Breath of the Wild and any of the main line Pokemon games.
                    </p>
                    <br />
                    <p>
                        I’m currently a 4th year student at the University of Waterloo and open to new opportunities feel free to reach out at <span className="font-bold">calvin.zhao12321@gmail.com</span>.
                    </p>
                </div>

                <div className='md:w-1/2'>
                    <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
                    <div className="flex flex-wrap flex-row justify-center md:justify-start">
                        {skills.map((item, index)=>{
                            return(
                                <p key = {index} 
                                className = "bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 \
                                            rounded font-semibold">
                                {item.skill}</p>
                            )
                        }

                        )}
                    </div>
                    <Image
                        className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"

                        src = "/about-image.png"
                        alt = ""
                        width = {325}
                        height= {325}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About