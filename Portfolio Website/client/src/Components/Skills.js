import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import javascriptLogo from "../images/javascript.png";
import nodejsLogo from "../images/nodejs.png";
import expressLogo from "../images/expressjs.png";
import reactjsLogo from "../images/reactjs.png";
import mongodbLogo from "../images/mongodb.png";
import mongooseLogo from "../images/mongoose.png";
import gitLogo from "../images/git.png";
import githubLogo from "../images/github.png";
import tailwindLogo from "../images/tailwind.png";

export const Skills = () => {
  return (
    <div className=" py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center md:text-left mb-10">
          Skills
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <SkillItem name="HTML" logo={htmlLogo} />
          <SkillItem name="CSS" logo={cssLogo} />
          <SkillItem name="JavaScript" logo={javascriptLogo} />
          <SkillItem name="Node.js" logo={nodejsLogo} />
          <SkillItem name="Express.js" logo={expressLogo} />
          <SkillItem name="React.js" logo={reactjsLogo} />
          <SkillItem name="MongoDB" logo={mongodbLogo} />
          <SkillItem name="Mongoose" logo={mongooseLogo} />
          <SkillItem name="Git" logo={gitLogo} />
          <SkillItem name="GitHub" logo={githubLogo} />
          <SkillItem name="Tailwind CSS" logo={tailwindLogo} />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, logo }) => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gray-900 p-4 rounded-lg shadow-lg
    hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={logo}
        alt={name}
        className="w-16 h-16 mb-3 object-contain rounded-full  p-2"
      />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};
