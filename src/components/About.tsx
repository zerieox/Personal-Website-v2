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
                    Introduction</h1>
                    <p>
                        Hi, my name is Calvin Zhao and I am currently studying Computer Engineering {" "}
                        at the Univeristy of Waterloo currently in my third year. 
                    </p>
                    <br />
                    <p>
                        I am a self-motivated and highly ambitious individual that is driven with a deep interest in technology,
                        particularly in the realms of software development. I have currently have completed 
                        2 relevant internships that is related to my field of software development. 
                    </p>
                    <br />
                    <p>
                       Beyond academia, I am deeply passionate about weightlifting and sports like volleyball, swimming, and 
                       badminton. I love pushing my body to its limits and thrive off the thrill of self improvement, in addition 
                       I also enjoy playing video games such as League of Legends and various Nintendo games like Pokemon.  
                    </p>
                    <br />
                    <p>
                        Currently I am looking for Summer 2024 internships in Software Development, so feel free to contact me 
                        at <span className="font-bold">{" calvin.zhao12321@gmail.com"}</span>. 
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