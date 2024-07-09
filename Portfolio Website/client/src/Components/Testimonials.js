import React from "react";
import KSImage from "../images/KS.png";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kuldeep Shukla",
      description: [
        "I've had the privilege of witnessing Kishan's remarkable journey from a dedicated undergraduate engineering student to a proficient full-stack developer. Right from the start, Kishan showed a keen interest in mastering both hardware and software engineering intricacies. His relentless curiosity and love for learning not only helped him excel among his peers but also ensured his success in the professional world.",
        "Moving effortlessly from academia to the professional domain, Kishan quickly left his mark as a full-stack developer. As his mentor, it's been incredibly fulfilling to see him grow into such a skilled professional. His ability to adapt to new technologies, tackle challenges with determination, and consistently deliver top-notch solutions speaks volumes about his potential for continued success in the dynamic field of technology.",
      ],
      company: "IIM–Nagpur Administration",
      linkedin: "https://www.linkedin.com/in/kuldeep-shukla-a07098b0/",
      image: KSImage,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center md:text-left mb-10">
          Testimonials
        </h2>
        <div className="flex justify-center py-8">
          {testimonials.map((testimoni) => (
            <div
              key={testimoni.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-4 p-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="p-6 flex items-center gap-4">
                <a
                  href={testimoni.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block h-24 w-24 mb-4"
                >
                  <img
                    src={testimoni.image}
                    alt={`${testimoni.name}'s profile`}
                    className="h-full w-full rounded-full object-cover"
                  />
                </a>
                <div className="flex flex-col justify-center">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {testimoni.name}
                  </h3>
                  <h4 className="text-gray-400 text-sm mb-4">
                    {testimoni.company}
                  </h4>
                </div>
              </div>
              <div className="text-gray-300 text-sm mb-2 text-justify">
                {testimoni.description.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                    <br></br>
                    <br></br>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
