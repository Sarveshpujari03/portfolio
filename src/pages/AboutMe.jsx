import React from 'react'
import ParticlesBackground from '../components/PartialsBackground'
import { Link, } from 'lucide-react'

const AboutMe = ({ id }) => {
    return (

        // <section className='w-full h-full text-white bg-background p-5' id={`${id}`}>

        //     <div className='w-full md:w-full flex justify-center items-center p-5 h-full text-white bg-background' >
        //         <container className='h-full w-full z-40 flex justify-center items-center gap-7'>

        //             <div className='w-full md:w-5/12 flex justify-center z-0 bg-rd-400'>
        //                 <img
        //                     src="/sanket_prof.jpg" // use '/' instead of 'public\' for correct path in React
        //                     alt="Sanket Profile"
        //                     className='h-72 w-72 md:h-80 md:w-80 rounded-full object-cover border-4 border-white shadow-lg'
        //                 />
        //             </div>

        //             {/* <div className='w-full md:w-9/12 flex flex-col gap-6 justify-center z-0 p-4 bg-card rounded-xl'>

        //                 <h1 className='w-full text-6xl font-semibold bg-card'>About Me</h1>

        //                 <h1 className='w-full text-xl text-orange font-semibold bg-card'>
        //                     Sanket Panchal
        //                 </h1>

        //                 <h1 className='text-white w-full md:w-full'>A passionate tech enthusiast having foundation of technical knowledge. I have ability to grasp thing
        //                     early and apply them with accuracy and precision. Excels in communicating and working
        //                     collaboratively</h1>

        //                 <h1>

        //                 </h1>

        //             </div> */}

        //             <section id="about" className="bg-card rounded-xl text-gray-base py-16 px-6">
        //                 <div className="max-w-4xl mx-auto text-left space-y-6">
        //                     <h2 className="text-3xl md:text-4xl font-bold font-poppins text-orange">About Me</h2>

        //                     <p className="text-lg font-inter leading-relaxed">
        //                         Hi! I’m <span className="text-orange font-semibold">Sanket Panchal</span>, a web developer with a passion for building clean, responsive, and intuitive interfaces using the MERN stack and Tailwind CSS. I enjoy crafting backend logic just as much as designing sleek user experiences.
        //                     </p>

        //                     <p className="text-lg font-inter leading-relaxed">
        //                         I actively improve my problem-solving through <span className="text-orange-light">DSA practice</span> on LeetCode and love exploring new technologies like microservices and WebSockets. Outside of tech, I find balance in <span className="text-orange-light">photography</span>, <span className="text-orange-light">sketching</span>, and <span className="text-orange-light">cricket</span>.
        //                     </p>

        //                     <div className='w-full flex gap-7'>
        //                         <a href='https://github.com/Sanketpanchal98'><i class="ri-github-fill  text-3xl cursor-pointer"></i></a>
        //                         <a href='https://www.instagram.com/sanketpanchal24/'><i class="ri-instagram-line text-3xl cursor-pointer"></i></a>
        //                         <a href='https://www.linkedin.com/in/sanket-panchal-785949261/'><i class="ri-linkedin-box-fill text-3xl cursor-pointer"></i></a>
        //                     </div>

        //                 </div>
        //             </section>




        //         </container>
        //     </div>
        // </section>

        <section className='w-full minh-full text-white bg-background p-5' id={`${id}`}>

            <div className='w-full flex flex-col md:flex-row justify-center items-center p-5 minh-full text-white bg-background gap-7'>

                <div className='minh-full w-full z-40 flex flex-col md:flex-row justify-center items-center'>

                    {/* <div className='w-full md:w-4/12 flex justify-center z-0'>
                        <img
                            src="/sanket_prof.jpg"
                            alt="Sanket Profile"
                            className='h-56 w-56 md:h-72 md:w-72 rounded-full object-cover border-4 border-white shadow-lg'
                        />
                    </div> */}

                    <section id="about" className="w-full md:w-8/12 h-full bg-card rounded-xl text-gray-base py-8 px-6 md:r-7">
                        <div className="max-w-4xl mx-auto text-left space-y-6">

                            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-orange">About Me</h2>

                            <p className="text-base md:text-lg font-inter leading-relaxed">
                                Hi! I’m <span className="text-orange font-semibold">Sanket Panchal</span> a dedicated and detail-oriented Full-Stack Web Developer with a strong focus on backend technologies and scalable system design. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and have successfully built real-world projects such as a YouTube backend clone, a Job Board application, and an AI-powered Trip Planner. My technical strengths include building secure REST APIs, managing database schemas, and developing responsive user interfaces enhanced with GSAP animations.
                            </p>

                            <p className="text-base md:text-lg font-inter leading-relaxed">
                                I actively improve my problem-solving through <span className="text-orange-light">DSA practice</span> on LeetCode and love exploring new technologies like microservices and WebSockets. Outside of tech, I find balance in <span className="text-orange-light">photography</span>, <span className="text-orange-light">sketching</span>, and <span className="text-orange-light">cricket</span>. <br></br> <br></br>
                                Currently, I am looking for internship or entry-level opportunities where I can apply my knowledge, collaborate with experienced professionals, and grow as a full-stack developer.
                            </p>

                            {/* <button className='p-3 bg-orange rounded-xl font-bold '>Download Resume</button> */}

                        </div>
                    </section>

                </div>
            </div>
        </section>



    )
}

export default AboutMe
