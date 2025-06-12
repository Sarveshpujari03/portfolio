import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import ParticlesBackground from '../components/PartialsBackground';

const Home = () => {
    return (
        <div className='w-full h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-10 md:gap-0'>

            <ParticlesBackground id={'tsparticles'}/>
            {/* Left - Image */}
            

            {/* Right - Text */}
            <div className='w-full md:w-1/2 flex flex-col gap-6 items-center text-center md:text-left z-40'>

                <div className='flex flex-wrap justify-center md:justify-start text-3xl md:text-5xl font-semibold'>
                    <h1 className='text-orange'>Hello,&nbsp;</h1>
                    <h1 className='text-white'>My name is Sanket!!</h1>
                </div>

                <div className='flex flex-wrap justify-center md:justify-center text-3xl md:text-5xl font-semibold'>
                    <h1 className='text-white'>I&nbsp;am&nbsp;</h1>
                    <TypeAnimation
                        className='text-orange-light'
                        sequence={[
                            'Web Developer!', 2000,
                            'Photographer!', 2000,
                            'Cricket Lover!', 2000,
                            'Software Engineer!', 2000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        wrapper="span"
                        cursor={true}
                    />
                </div>

                <button className='text-white bg-card p-3 rounded-xl font-semibold text-md mt-4 hover:bg-gray'>Download Resume</button>
            </div>
        </div>
    );
};

export default Home;