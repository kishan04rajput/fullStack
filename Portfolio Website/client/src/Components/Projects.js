import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Crypto Web App",
      description:
        "I developed a web project utilizing HTML, CSS, JavaScript, and React to fetch cryptocurrency data with pagination and a search bar feature.",
      tags: ["React", "Javascript", "Html", "CSS", "Api integration"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/cryptoApp-OfXX4.png",
      demoUrl: "https://block-chain-quantifier.netlify.app/",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/cryptoWebApp",
    },
    {
      title: "Linkedingage",
      description:
        "I've crafted an extensive project comprising 11 webpages, each showcasing my adeptness in HTML, CSS, and JavaScript. The webpages are meticulously designed to be responsive, highlighting my proficiency in creating dynamic and adaptable user interfaces across various devices.",
      tags: ["Javascript", "Html", "CSS"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/photo-1563986768494-4dee2763ff3f-x4DVS.jpeg",
      demoUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/linkedengage",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/linkedengage",
    },
    {
      title: "Todo List",
      description:
        "I created a Todo List project showcasing my skills in HTML, CSS, Bootstrap, and JavaScript, offering an efficient task management solution with a user-friendly interface.",
      tags: ["Javascript", "Html", "Bootstrap", "CSS"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/toDoList-wdaTW.png",
      demoUrl: "https://live-todo-list.netlify.app/",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/ToDoList",
    },
    {
      title: "Tic Tac Toe",
      description:
        "I've developed a Tic Tac Toe project demonstrating my proficiency in HTML, CSS, Bootstrap, and JavaScript, offering an engaging gaming experience.",
      tags: ["Javascript", "Html", "Bootstrap", "CSS"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/ticTacToe-2hfLO.png",
      demoUrl: "https://live-tic-tac-toe.netlify.app/",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/Tic%20Tac%20Toe",
    },
    {
      title: "Spotify Clone",
      description:
        "I've created a Spotify clone using HTML, CSS, and JavaScript, enabling audio playback functionality for an immersive experience.",
      tags: ["Javascript", "Html", "CSS"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/spotifyClone-7ti77.png",
      demoUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/SpotifyClone",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/SpotifyClone",
    },
    {
      title: "demoStartWebsite",
      description:
        "I've created a demo startup landing page using HTML and CSS, showcasing my proficiency in front-end development.",
      tags: ["Html", "CSS"],
      imageUrl:
        "https://cdn.dorik.com/66312161090689001101572a/images/1-1XZbJ.png",
      demoUrl: "https://live-startup-website.netlify.app/",
      githubUrl:
        "https://github.com/kishan04rajput/fullStack/tree/main/demoStartupWebsite",
    },
    // {
    //   title: "",
    //   description:
    //     "",
    //   tags: ["Javascript", "CSS"],
    //   imageUrl:
    //     "",
    //   demoUrl: "",
    //   githubUrl:
    //     "",
    // },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
      <style>
        {`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #4a5568 #2d3748;
        }

        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2d3748;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4a5568;
          border-radius: 10px;
          border: 3px solid #2d3748;
        }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center md:text-left mb-10">
          Projects
        </h1>
        <div className="flex overflow-x-auto space-x-4 custom-scrollbar py-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 flex-shrink-0"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-white text-lg font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
