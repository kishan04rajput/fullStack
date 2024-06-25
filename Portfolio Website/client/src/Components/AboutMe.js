import React from "react";

export const AboutMe = () => {
  return (
    <div className=" py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center md:text-left mb-10">
          About Me
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed text-justify">
          Hello, I'm Kishan Rajput, a passionate MERN stack developer with a
          love for creating efficient, scalable web applications. With a solid
          background in JavaScript, MongoDB, Express, React, and Node.js, I
          thrive on turning ideas into reality through code. My journey in web
          development began with a curiosity that has evolved into a strong
          skill set, bolstered by continuous learning and exploration of new
          technologies.
        </p>
      </div>
      <SkillsSection />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <div className="mt-12 py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        <SkillCard
          title="Frontend"
          skills="React JS, JavaScript"
          description="As a frontend developer, I specialize in crafting intuitive user interfaces using React JS. With a keen eye for design and user experience, I transform complex requirements into elegant solutions. My proficiency extends to vanilla JavaScript, ensuring robust frontend functionality."
          icon="🔷"
        />
        <SkillCard
          title="Backend"
          skills="Node.js, Express JS, MongoDB"
          description="In backend development, I leverage Node.js and Express to build scalable server-side applications. Proficient in database management with MongoDB, I ensure seamless data handling and API integration. My solutions are designed for efficiency and maintainability."
          icon="🔶"
        />
        <SkillCard
          title="Full Stack"
          skills="GIT, RESTful API Design"
          description="As a full stack developer, I excel in both frontend and backend technologies. Proficient in version control using GIT, I ensure collaborative and organized development processes. My expertise in RESTful API design facilitates seamless communication between frontend and backend systems."
          icon="🔺"
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">{title}</h3>
      <h4 className="text-xl text-gray-400 mb-4">{skills}</h4>
      <p className="text-lg text-justify">{description}</p>
    </div>
  );
};
