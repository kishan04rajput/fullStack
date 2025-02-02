import React from "react";
// import portfolioImage from "../images/portfolioWebsite.png";
import invoiceImage from "../images/invoice.png";
import pollingSystemImage from "../images/pollingSystem.png";
// import resumeImage from "../images/resumeImage.png";
import myweathersapps from "../images/myweathersapps.png";
import ecomzy from "../images/ecomzy.png";
import blog from "../images/blogs.png";
import randomGif from "../images/random-gif.png";
import passwordGenerator from "../images/passwordGenerator.png";

export const Projects = () => {
    const projects = [
        {
            title: "Polling System",
            description:
                "A web app for educational institutes, managing user roles (Teacher, Student, Institute) via MySQL, Express, React, and Node.js. Enables dynamic polling and robust CRUD operations for efficient data management.",
            tags: [
                "Nodejs",
                "Express",
                "MySQL",
                "React",
                "HTML",
                "Tailwind",
                "CSS",
                "API Integration",
            ],
            imageUrl: pollingSystemImage,
            demoUrl:
                "https://drive.google.com/file/d/1P6FB3sT_JRzvHJohxyM6S3Zl2QJcTEKw/view",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/BasicPollingSystem",
        },
        {
            title: "Invoice Generator",
            description:
                "I developed a full-stack Invoice Generator App using Node.js, Express, and React. The app provides a robust backend for server-side operations and a dynamic frontend for seamless invoice management.",
            tags: [
                "Nodejs",
                "express",
                "React",
                "Html",
                "Tailwind",
                "CSS",
                "API Integration",
            ],
            imageUrl: invoiceImage,
            demoUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/Invoice%20Generator",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/Invoice%20Generator",
        },
        {
            title: "Crypto Web App",
            description:
                "Developed a comprehensive web application utilizing HTML, CSS, JavaScript, and React. This project features real-time cryptocurrency data fetching, pagination, and a search bar for enhanced user interaction.",
            tags: ["React", "Javascript", "Html", "CSS", "API Integration"],
            imageUrl:
                "https://cdn.dorik.com/66312161090689001101572a/images/cryptoApp-OfXX4.png",
            demoUrl: "https://block-chain-quantifier.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/cryptoWebApp",
        },
        {
            title: "My Weather App",
            description:
                "This is a website that shows current location weather and allows users to search the weather of any city. Built using React, OpenWeather API, JavaScript, HTML, and CSS.",
            tags: [
                "React",
                "OpenWeather API",
                "JavaScript",
                "HTML",
                "CSS",
                "API Integration",
            ],
            imageUrl: myweathersapps,
            demoUrl: "https://myweathersapps.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/14d53e9b7f0304737866ad7751a51cdba9a5ef3f/weatherapp",
        },
        {
            title: "Password Generator",
            description:
                "Creates random passwords which may include numbers, uppercase, lowercase, symbols. Made the website using HTML for structure, CSS for styling, and JavaScript for generating random passwords.",
            tags: ["HTML", "CSS", "JavaScript", "Password Generator"],
            imageUrl: passwordGenerator,
            demoUrl: "https://password-generator-sites.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/63fd02e3a9c08b4ccf92b303af1c7ba869c5de03/passwordGenerator",
        },
        {
            title: "RandomGIF",
            description:
                "Created a website that can show random GIFs as well as show GIFs based on input value. Made using React, JavaScript, HTML, Tailwind. GIFs are fetched from an API.",
            tags: ["React", "JavaScript", "HTML", "Tailwind", "API Fetch"],
            imageUrl: randomGif,
            demoUrl: "https://random-gif-site.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/14d53e9b7f0304737866ad7751a51cdba9a5ef3f/random-gif",
        },
        {
            title: "Tic Tac Toe",
            description:
                "Developed a Tic Tac Toe game using HTML, CSS, Bootstrap, and JavaScript. This project showcases my ability to create engaging and interactive gaming experiences.",
            tags: ["Javascript", "Html", "Bootstrap", "CSS"],
            imageUrl:
                "https://cdn.dorik.com/66312161090689001101572a/images/ticTacToe-2hfLO.png",
            demoUrl: "https://live-tic-tac-toe.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/Tic%20Tac%20Toe",
        },
        {
            title: "Todo List",
            description:
                "Developed a Todo List application highlighting skills in HTML, CSS, Bootstrap, and JavaScript. This project provides an efficient task management solution with a user-friendly interface.",
            tags: ["Javascript", "Html", "Bootstrap", "CSS"],
            imageUrl:
                "https://cdn.dorik.com/66312161090689001101572a/images/toDoList-wdaTW.png",
            demoUrl: "https://live-todo-list.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/main/ToDoList",
        },
        {
            title: "Ecomzy",
            description:
                "Ecomzy is an online store built with React, JavaScript, HTML, CSS, Tailwind, and Redux Toolkit. It offers dynamic product listings, detailed product pages, and efficient cart management, ensuring a seamless shopping experience with a modern, responsive design.",
            tags: [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind",
                "Redux Toolkit",
            ],
            imageUrl: ecomzy,
            demoUrl: "https://ecomzy-site.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/14d53e9b7f0304737866ad7751a51cdba9a5ef3f/ECOMZY",
        },
        {
            title: "Blogs",
            description:
                "Created a blog website that shows blogs through API fetch and is used through React, JavaScript, HTML, Tailwind, and Context API for global data management.",
            tags: [
                "React",
                "JavaScript",
                "HTML",
                "Tailwind",
                "Context API",
                "API Fetch",
            ],
            imageUrl: blog,
            demoUrl: "https://blogs-contexts-sites.netlify.app/",
            githubUrl:
                "https://github.com/kishan04rajput/fullStack/tree/14d53e9b7f0304737866ad7751a51cdba9a5ef3f/blogs-context",
        },
        // {
        //     title: "Portfolio Website",
        //     description:
        //         "Created a professional portfolio website using React, with seamless auto-deployment on Netlify. This site showcases my projects and skills with a modern and responsive design.",
        //     tags: ["Netlify", "React", "HTML", "Tailwind", "CSS"],
        //     imageUrl: portfolioImage,
        //     demoUrl: "https://kishan-rajput.netlify.app/",
        //     githubUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/Portfolio%20Website/client",
        // },
        // {
        //     title: "Resume",
        //     description:
        //         "Created a professional live resume website using React, with seamless auto-deployment on Netlify. This site showcases my live resume with a modern and responsive design.",
        //     tags: ["Netlify", "React", "HTML", "Tailwind", "CSS"],
        //     imageUrl: resumeImage,
        //     demoUrl: "https://kishan-rajput-resume.netlify.app/",
        //     githubUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/my-resume",
        // },
        // {
        //     title: "Linkedingage",
        //     description:
        //         "Crafted an extensive project with 11 web pages, demonstrating expertise in HTML, CSS, and JavaScript. The design is responsive, showcasing dynamic and adaptable user interfaces across various devices.",
        //     tags: ["Javascript", "Html", "CSS"],
        //     imageUrl:
        //         "https://cdn.dorik.com/66312161090689001101572a/images/photo-1563986768494-4dee2763ff3f-x4DVS.jpeg",
        //     demoUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/linkedengage",
        //     githubUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/linkedengage",
        // },
        // {
        //     title: "Spotify Clone",
        //     description:
        //         "Developed a Spotify clone using HTML, CSS, and JavaScript, featuring audio playback functionality. This project replicates the core features of Spotify for an immersive user experience.",
        //     tags: ["Javascript", "Html", "CSS"],
        //     imageUrl:
        //         "https://cdn.dorik.com/66312161090689001101572a/images/spotifyClone-7ti77.png",
        //     demoUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/SpotifyClone",
        //     githubUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/SpotifyClone",
        // },
        // {
        //     title: "Demo Startup Website",
        //     description:
        //         "Created a demo startup landing page using HTML and CSS. This project demonstrates proficiency in front-end development with a focus on clean and modern design.",
        //     tags: ["Html", "CSS"],
        //     imageUrl:
        //         "https://cdn.dorik.com/66312161090689001101572a/images/1-1XZbJ.png",
        //     demoUrl: "https://live-startup-website.netlify.app/",
        //     githubUrl:
        //         "https://github.com/kishan04rajput/fullStack/tree/main/demoStartupWebsite",
        // },
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

        .card-hover-shadow:hover {
          box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
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
                            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-72 flex-shrink-0 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 card-hover-shadow"
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
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                                        >
                                            Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
