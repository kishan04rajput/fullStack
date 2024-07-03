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
      title: "Crypto Web App",
      description: [
        "Spearheaded the conception and implementation of a web project, employing HTML, CSS, JavaScript, and React to craft an intuitive user interface that led to a 50% increase in user retention and a 20% rise in conversion rates.",
        "Integrated functionality to fetch cryptocurrency data fluidly, ensuring real-time updates and accurate information for users.",
        "Applied pagination to manage large datasets effectively, enabling users to navigate through cryptocurrency listings seamlessly.",
        "Incorporated a search bar feature to facilitate quick and convenient access to specific cryptocurrency information, enhancing user accessibility and usability.",
      ],
    },
    {
      title: "Spotify Clone",
      description: [
        "Created a Spotify clone from scratch using HTML, CSS, and JavaScript, ensuring faithful reproduction of the original platform’s design and functionality.",
        "Implemented audio playback functionality to enable users to stream and listen to music seamlessly within the application.",
        "Ensured compatibility across various devices and browsers, optimizing user experience and accessibility.",
      ],
    },
    {
      title: "Linkedingage",
      description: [
        "Crafted 11 webpages as part of the Linkedingage project, showcasing expertise in HTML, CSS, and JavaScript. Thoroughly designed each webpage to be responsive, ensuring seamless user experiences across desktops, tablets, and mobile devices.",
        "Demonstrated adeptness in creating vibrant user interfaces, incorporating interactive elements and engaging visuals to enhance user engagement.",
        "Employed best practices in web development to optimize performance and accessibility, resulting in a polished and professional project showcase.",
      ],
    },
    {
      title: "Tic Tac Toe",
      description: [
        "Developed a Tic Tac Toe game utilizing HTML, CSS, Bootstrap, and JavaScript, demonstrating adeptness in front-end technologies. Designed an engaging user interface to provide an immersive gaming experience for players.",
        "Executed game logic and functionality using JavaScript to ensure seamless gameplay.",
        "Utilized Bootstrap framework for responsive design, ensuring consistent performance on diverse devices and screen sizes.",
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
