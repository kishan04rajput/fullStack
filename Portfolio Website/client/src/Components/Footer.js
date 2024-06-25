import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start mb-4 md:mb-0">
            <span className="font-semibold text-xl">Thanks for scrolling</span>
          </div>
          <div className="flex mt-4 md:m-0 md:ml-4">
            <a
              href="https://drive.google.com/drive/folders/1Ik40kSpn6qxXCHhrm3Cj7bkM9Z2SlD2W"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md text-sm md:text-base"
              target="_blank"
              rel="noreferrer"
              title="Link to resume."
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
