const ProjectCard = ({ title, description }) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
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
      title: "Cross Platform Map",
      description: [
        "Built a reusable Expo-based cross-platform map module for Android, iOS, and web, which was adopted across multiple internal products including Cital, Siteman, and Housie.",
        "Developed a single shared demo project that was reused across platforms and product teams to ensure consistency and reduce duplicate implementation effort.",
      ],
    },
    {
      title: "Reusable OTP Auto-Fill Module",
      description: [
        "Developed an Android-only OTP auto-fill solution and reused it across Cital, Siteman, and Housie to standardize OTP handling and reduce duplicate implementation effort.",
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
      <section className="mb-6">
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
