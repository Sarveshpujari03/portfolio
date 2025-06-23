import React, { useState } from 'react'

const ProjectCard = ({path, title, description, link}) => {

    const [hidden,setHidden] = useState(true)

  return (
    <div className={`md:w-3/12 h-full flex flex-col p-4 gap-4 bg-card rounded-xl hover:scale-105 duration-300`}
    >
      <h2 className='text-2xl font-inter text-black font-bold text-white'>{title}</h2>
      <p className='text-sm '>{description}</p>
      {/* <img src={`${path}`} alt="" /> */}
      <div className='flex gap-2'>
        {
            hidden && <a className={`bg-blue-500 text-white p-2 rounded `}href={`${link}`} >Code</a>
        }
        {/* <button className='bg-gray-500 text-white p-2 rounded'>Code</button> */}
      </div>
    </div>
  )
}

export default ProjectCard
