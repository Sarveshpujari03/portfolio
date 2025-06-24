import React from 'react'
import Footer from '../components/Footer'

const ContactMe = ({ id }) => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center bg-background z-40' id={id}>
            <div className='w-full h-full z-40 flex flex-col items-center gap-10 px-4 py-12'>
                <h1 className='text-4xl md:text-6xl text-white font-semibold'>Contact Me</h1>

                <div className='flex flex-col md:flex-row w-full max-w-6xl gap-8 justify-center items-center'>
                    {/* Phone */}
                    <div className="hover:scale-105 duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center">
                        <i className="ri-phone-fill text-5xl md:text-6xl mb-2"></i>
                        <h2 className="text-lg md:text-xl mb-1">Phone No.</h2>
                        <a className='text-orange-light text-sm md:text-base' href='tel:+918180050035'>+91 81800 50035</a>
                    </div>

                    {/* Email */}
                    <div className="hover:scale-105 duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center">
                        <i className="ri-mail-line text-5xl md:text-6xl mb-2"></i>
                        <h2 className="text-lg md:text-xl mb-1">Email</h2>
                        <a className='text-orange-light text-sm md:text-base' href='mailto:sanketpanchal775@gmail.com'>
                            sanketpanchal775@gmail.com
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="hover:scale-105 duration-500 bg-card w-full md:w-1/3 rounded-xl p-6 text-white font-semibold flex flex-col items-center text-center">
                        <i className="ri-linkedin-box-fill text-5xl md:text-6xl mb-2"></i>
                        <h2 className="text-lg md:text-xl mb-1">LinkedIn</h2>
                        <a className='text-orange-light text-sm md:text-base' href="https://www.linkedin.com/in/sanket-panchal/" target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </div>
                </div>
            <Footer />
            </div>

        </div>
    )
}

export default ContactMe
