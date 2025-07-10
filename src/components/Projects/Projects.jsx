import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
    <div className="py-12 px-8 flex flex-wrap gap-5">
  <ProjectCard
    title="Cilly Blog"
    main="Created a personal blog website with a comprehensive admin panel, allowing for efficient content management and user interaction."
    demoLink="https://www.google.com"
    githubLink="https://github.com/"
  />
  <ProjectCard
    title="WeatherEcho"
    main="Created a responsive web application that delivers real-time weather updates for any location, enhancing user experience with accurate and timely weather data."
    demoLink="https://www.google.com"
    githubLink="https://github.com/"
  />
  <ProjectCard
    title="Apni Dukaan"
    main="Created a responsive E commerce application where user can buy and seller can sell there item used MERN stack"
    demoLink="https://www.google.com"
    githubLink="https://github.com/"
  />
</div>

    </div>
  );
};

export default Projects;