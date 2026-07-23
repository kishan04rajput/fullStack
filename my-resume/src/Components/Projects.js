import React from "react";

// Project card component
const ProjectCard = ({ title, description }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="list-disc text-justify">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const Projects = () => {
  // Projects
  const projects = [
    {
      title: "Weather Viewer",
      description: [
        "Developed a comprehensive Weather Viewer application using React and Tailwind CSS that enables users to input latitude and longitude coordinates with customizable date ranges to retrieve historical temperature and apparent temperature data, featuring interactive data visualization through charts and detailed tabular displays while ensuring responsive design for seamless user experience across desktop and mobile devices, integrated with Open-Meteo Historical Weather API for accurate and reliable weather data retrieval.",
      ],
    },
    {
      title: "Crypto Web App",
      description: [
        "Developed a web application using React with real-time cryptocurrency data fetching, pagination, and search functionality.",
      ],
    },
    {
      title: "My Weather App",
      description: [
        "Developed a weather web application using ReactJS with automatic location detection and city search functionality, displaying temperature, wind speed, humidity, and cloud coverage data through OpenWeatherMap API integration.",
      ],
    },
  ];

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          PROJECTS
        </h2>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;

