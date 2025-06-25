import { Heart } from 'lucide-react'
import React from 'react'
import { BsArrowRight, BsHeartFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <footer className='w-full bg-gray-950 mt-9 px-6 py-10 z-40'>
            <div className='flex flex-col md:flex-row justify-between md:justify-evenly gap-10 text-white text-lg z-40'>

                {/* About Section */}
                <div className='md:w-1/3 flex flex-col gap-4 z-40'>
                    <h1 className='font-semibold text-xl'>About</h1>
                    <p className='text-base'>I would like to interact and collaborate with teams.</p>
                    <p className='mt-4 font-semibold text-lg'>Social Links</p>
                    <div className='flex gap-5 text-2xl mt-2'>
                        <a href='https://github.com/Sanketpanchal98' target="_blank" rel="noopener noreferrer">
                            <i className="ri-github-fill hover:text-orange cursor-pointer"></i>
                        </a>
                        <a href='https://www.instagram.com/sanketpanchal24/' target="_blank" rel="noopener noreferrer">
                            <i className="ri-instagram-line hover:text-orange cursor-pointer"></i>
                        </a>
                        <a href='https://www.linkedin.com/in/sanket-panchal-785949261/' target="_blank" rel="noopener noreferrer">
                            <i className="ri-linkedin-box-fill hover:text-orange cursor-pointer"></i>
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className='md:w-1/3 flex flex-col gap-3 z-40'>
                    <h1 className='font-semibold text-xl'>Links</h1>
                    {[
                        { name: "Home", to: "home" },
                        { name: "About Me", to: "about" },
                        { name: "Education", to: "education" },
                        { name: "Projects", to: "project" },
                        { name: "Contact", to: "contactme" }
                    ].map((link, index) => (
                        <div key={index} className='flex items-center gap-2'>
                            <BsArrowRight />
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className='text-base hover:text-orange cursor-pointer'
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className='md:w-1/3 flex flex-col gap-4 text-base z-40'>
                    <h1 className='font-semibold text-xl'>Have Questions?</h1>
                    <div className='flex items-center gap-2'>
                        <i className='ri-phone-fill'></i>
                        <a href="tel:+918180050035" className='hover:text-orange'>+91 81800 50035</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='ri-mail-line'></i>
                        <a href="mailto:sanketpanchal775@gmail.com" className='hover:text-orange'>
                            sanketpanchal775@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full mt-10 border-t border-white/20 pt-4 text-center text-sm text-gray-400 flex flex-col items-center gap-2">
                <div className="flex gap-1 text-gray-500 text-lg">
                    <span>Made with</span>
                    <span className="text-gray flex gap-1 items-center">
                        <BsHeartFill />
                        <BsHeartFill />
                    </span>
                    <span>by Sanket Panchal</span>
                </div>
                <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Sanket Panchal. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
