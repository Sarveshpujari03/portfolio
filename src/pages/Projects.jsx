import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Travely',
    description:
      'An AI-powered web application that creates personalized travel itineraries tailored to user preferences, including location, budget, and trip duration.',
    link: 'https://github.com/Sarveshpujari03/Travely.git',
  },
  {
    title: 'Employee Management System',
    description:
      'Core Java-based Employee Management System using AWT and Swing for GUI, and Collections framework for data handling.',
    link: 'https://github.com/Sarveshpujari03/Employee-Management-System-using-Java',
  },
  {
    title: 'Blog-Easy',
    description:
      'Blog-Easy: A simple React-based application where users can write and publish blogs with a clean and intuitive UI.',
    link: 'https://github.com/Sarveshpujari03/Blog-Easy',
  },
];

const Projects = ({ id }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-2 p-6 md:p-12 items-center text-white"
      id={id}
    >
      <h1 className="z-40 text-3xl md:text-4xl font-semibold mt-16 md:mt-3 w-full md:text-start">
        Projects
      </h1>

      <div className="w-full z-40 p-4 md:p-8 flex flex-col gap-10 font-poppins ">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="w-full flex justify-center"
            >
              <div
                className={`w-full md:w-2/3 max-w-2xl ${
                  isLeft ? 'mr-auto' : 'ml-auto'
                }`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  path={project.path}
                  link={project.link}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
