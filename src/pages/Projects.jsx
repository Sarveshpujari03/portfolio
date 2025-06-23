import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-14 p-6 md:p-12 items-center text-white bg-background"
      id={id}
    >
      {/* Skills Section */}
      <div className="w-full z-40 flex flex-col p-4 md:p-8 rounded-xl bg-background">
        <h1 className="z-40 text-3xl md:text-4xl font-poppins mb-6">Skills</h1>
        <div className="w-full flex flex-wrap gap-4 items-center justify-center md:justify-evenly">
          <img src="/icons/003-html-5.png" alt="HTML" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/003-css-3.png" alt="CSS" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/009-js.png" alt="JavaScript" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/002-react.png" alt="React" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/004-nodejs.png" alt="Node.js" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/002-global-server.png" alt="Server" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/001-c.png" alt="C" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/005-python.png" alt="Python" className="h-12 md:h-16 cursor-pointer" />
          <img src="/icons/001-linux.png" alt="Linux" className="h-12 md:h-16 cursor-pointer" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full z-40 p-4 md:p-8 flex flex-col rounded-xl font-poppins bg-background">
        <h1 className="z-40 text-3xl md:text-4xl mb-6">Projects</h1>
        <div className="w-full flex flex-wrap gap-6 justify-evenly items-center flex-col md:flex-row">
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
