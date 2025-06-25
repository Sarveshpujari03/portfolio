import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-2 p-6 md:p-12 items-center text-white bg-background"
      id={id}
    >
      {/* Skills Section */}

      {/* Projects Section */}
        <h1 className="z-40 text-3xl md:text-4xl font-semibold mt-16 md:mt-3 w-full md:text-start">Projects</h1>

      <div className="w-full z-40 p-4 md:p-8 flex flex-wrap gap-10 rounded-xl justify-evenly font-poppins bg-background">
        {/* <div className="w-full flex flex-wrap gap-6 justify-evenly items-center flex-col md:flex-row">
          <ProjectCard
            title="Trip Planner AI"
            description="AI-powered web app that generates personalized travel itineraries based on user inputs like location, budget, and trip duration."
            path="/icons/trip-planner.jpg"
            link={"https://github.com/Sanketpanchal98/Trip-Planner-AI"}
          />
          <ProjectCard
            title="YouTube-X Backend Clone"
            description="RESTful backend built with Node.js and MongoDB, featuring auth, video uploads, likes, comments, and subscriptions."
            path="/icons/trip-planner.jpg"
            link={"https://github.com/Sanketpanchal98/Youtube-Backend-Clone"}
          />
          <ProjectCard
            title="Job Board"
            description="Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth."
            path="/icons/ai-project.webp"
            link={"http://github.com/Sanketpanchal98/jobboard"}
          />
          <ProjectCard
            title=""
            description="Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth."
            path="/icons/ai-project.webp"
            link={"http://github.com/Sanketpanchal98/jobboard"}
          />
          <ProjectCard
            title="Job Board"
            description="Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth."
            path="/icons/ai-project.webp"
            link={"http://github.com/Sanketpanchal98/jobboard"}
          />
          <ProjectCard
            title="Python Voice Assistance"
            description="Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth."
            path="/icons/ai-project.webp"
            link={"http://github.com/Sanketpanchal98/jobboard"}
          />
        </div> */}

        <div data-animate className='md:w-1/3 '>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">FullStack</h2>
            <div className="w-full flex flex-wrap gap-4 items-center">
              <ProjectCard
            title="Trip Planner AI"
            description="AI-powered web app that generates personalized travel itineraries based on user inputs like location, budget, and trip duration."
            path="/icons/trip-planner.jpg"
            link={"https://github.com/Sanketpanchal98/Trip-Planner-AI"}
          />
            </div>
          </div>
          <div data-animate className='md:w-1/3 flex items-end'>
            {/* <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">Backend</h2> */}
            <div className="flex flex-wrap gap-4 items-center">
              <ProjectCard
            title="Job Board"
            description="Node.js and MongoDB-based app where employers post jobs and candidates apply, with role-based access and JWT auth."
            path="/icons/ai-project.webp"
            link={"http://github.com/Sanketpanchal98/jobboard"}
          />
            </div>
          </div>
        <div data-animate className='md:w-1/3'>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-6">Backend</h2>
            <div className="flex flex-wrap gap-4 items-center">
              <ProjectCard
            title="YouTube-X Backend Clone"
            description="RESTful backend built with Node.js and MongoDB, featuring auth, video uploads, likes, comments, and subscriptions."
            path="/icons/trip-planner.jpg"
            link={"https://github.com/Sanketpanchal98/Youtube-Backend-Clone"}
          />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Projects;
