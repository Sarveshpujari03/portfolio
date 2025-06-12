import React from 'react'
import ParticlesBackground from '../components/PartialsBackground'

const AboutMe = () => {
    return (

        <section className='w-full h-full text-white bg-background'>

            <div className='w-full md:w-full flex justify-center items-center h-full text-white bg-background' >
                <container className='h-full w-full z-40 flex justify-center items-center'>

                    <div className='w-full md:w-1/2 flex justify-center z-0'>
                        <img
                            src="/sanket_prof.jpg" // use '/' instead of 'public\' for correct path in React
                            alt="Sanket Profile"
                            className='h-72 w-72 md:h-80 md:w-80 rounded-full object-cover border-4 border-white shadow-lg'
                        />
                    </div>

                    <div className='w-full md:w-1/2 flex flex-col gap-6 justify-center z-0 p-4 bg-card rounded-xl'>

                        <h1 className='w-full text-6xl font-semibold bg-card'>About Me</h1>

                        <h1 className='text-white w-full md:w-1/2'>A passionate tech enthusiast having foundation of technical knowledge. I have ability to grasp thing
                            early and apply them with accuracy and precision. Excels in communicating and working
                            collaboratively</h1>

                    </div>

                </container>
            </div>
        </section>

    )
}

export default AboutMe
