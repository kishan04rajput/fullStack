import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Home = () => {
  const [text] = useTypewriter({
    words: ["Kishan Rajput", "a developer."],
    loop: {},
  });

  return (
    <div className="mt-11">
      <div className="flex flex-col md:flex-row items-center justify-around py-16 bg-gradient-to-r from-black to-gray-800 text-white">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hello, I am <br />
            <span className="text-teal-500">{text}</span>
            <Cursor />
          </h1>
        </div>
        <div className="relative w-64 h-64 md:w-96 md:h-96 mt-8 md:mt-0">
          <div className="absolute inset-0 clip-hexagon">
            <img
              src="https://i.pinimg.com/474x/c4/14/db/c414dbebbd15f8ce3dc6b01749810ec6.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
