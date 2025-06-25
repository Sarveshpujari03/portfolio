import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import React, { useState,useEffect } from 'react'
import useGsapScrollAnimation from '../Hooks/animationHook'

const ProjectCard = ({path, title, description, link}) => {

  //  useEffect(() => {
  //   gsap.from('#box', {
  //     scrollTrigger: {
  //       trigger: '#box',
  //       markers: true,
  //     },
  //     y: -100,
  //     opacity: 0,
  //     duration: 1,
  //     // ease: 'power2.out',
  //   });
  // }, []);
  useGsapScrollAnimation();

  return (
    <div className="shadow-lg transition-shadow hover:shadow-orange-500/20 md:w-full h-full flex flex-col p-4 gap-4 z-40 bg-card rounded-xl duration-300"
    id='box' data-animate
    >
      <h2 className='text-2xl font-inter text-black font-bold text-white'>{title}</h2>
      <p className='text-sm '>{description}</p>
      {/* <img src={`${path}`} alt="" /> */}
      <div className='flex gap-2'>
        {
            <a className={`bg-blue-500 text-white p-2 rounded `}href={`${link}`} >Code</a>
        }
        {/* <button className='bg-gray-500 text-white p-2 rounded'>Code</button> */}
      </div>
    </div>
  )
}

export default ProjectCard
