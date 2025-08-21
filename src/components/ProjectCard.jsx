import React from 'react';

const ProjectCard = ({ path, title, description, link }) => {
  return (
    <div
      className="shadow-lg transition-shadow hover:shadow-orange-500/20 md:w-full h-full flex flex-col p-4 gap-4 z-40 bg-card rounded-xl duration-300"
      id="box"
      data-animate
    >
      <h2 className="text-2xl font-inter text-white font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex gap-2">
        <a className="bg-blue-500 text-white p-2 rounded" href={link}>
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
