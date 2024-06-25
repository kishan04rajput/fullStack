import React from "react";

export const ContactMe = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white h-screen flex justify-center items-center">
      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden md:flex">
        {/* Left Part */}
        <div className="md:w-1/2 p-8 bg-gray-800 flex flex-col justify-between">
          {/* Top Part */}
          <div className="mb-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center md:text-left mb-10">
              Contact Me
            </h1>
            <p className="text-lg mb-4">
              Feel free to reach out to me using any of the following methods:
            </p>
            {/* Contact Buttons Top Part */}
            <div className="mb-4 space-y-2">
              <div
                className="block bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-center text-sm"
                title="email"
              >
                kishan9rajput@gmail.com
              </div>
              <a
                href="https://www.linkedin.com/in/kishan-rajput-6b7ab3179"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-center text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* Bottom Part */}
          <div>
            <p className="text-lg mb-2 text-white">Coding Profiles:</p>
            {/* Contact Buttons Bottom Part */}
            <div className="space-y-2">
              <a
                href="https://leetcode.com/u/Kishan04091999/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-center text-sm"
              >
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/kishan9bhrd/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-center text-sm"
              >
                GeeksforGeeks
              </a>
              <a
                href="https://github.com/kishan04rajput"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-md text-center text-sm"
              >
                Github
              </a>
            </div>
          </div>
        </div>
        {/* Right Part */}
        <div className="md:w-1/2">
          <img
            src="https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/contact.jpeg"
            alt="Your"
            className="w-full h-full object-cover md:rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};
