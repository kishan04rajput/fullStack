import React from "react";

export const WorkExperience = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          PROFESSIONAL EXPERIENCES
        </h2>

        {/* Housie | Software Engineer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Housie | Software Engineer</h3>
            <p className="text-sm">Feb '26 - Present</p>
          </div>
          <ul className="list-disc mt-2 text-justify">
            <li className="mb-0">
              Independently architected and built Housie Hub from scratch, the core internal operations application across iOS and Android using React Native and Ruby on Rails, taking complete end-to-end ownership of full-stack development and system architecture.
            </li>
            <li className="mb-0">
              Engineered vital operational workflows within Housie Hub, including real-time order processing, automated packer assignment, and rider management modules to streamline order fulfillment and boost overall business efficiency.
            </li>
          </ul>
        </div>

        {/* Cital | Software Engineer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Cital | Software Engineer</h3>
            <p className="text-sm">Feb '25 - Feb '26</p>
          </div>
          <ul className="list-disc mt-2 text-justify">
            <li className="mb-0">
              Spearheading full-stack development initiatives at Cital, Vadodara, utilizing React Native for
              cross-platform mobile application development across Android and iOS platforms while
              concurrently managing web frontend development, and implementing robust backend
              solutions using Ruby on Rails to deliver scalable and efficient applications that meet diverse
              client requirements and drive business growth.
            </li>
            <li className="mb-0">
              Leading end-to-end development of mobile applications with seamless user experience,
              implementing responsive web interfaces, and architecting backend APIs and database
              solutions, while collaborating with cross-functional teams to deliver high-quality products
              and mentor junior developers in best practices and modern development methodologies.
            </li>
          </ul>
        </div>

        {/* Linkedingage | Web Designer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">
              Linkedingage | Web Designer
            </h3>
            <p className="text-sm">Dec '23 - Feb '24</p>
          </div>
          <ul className="list-disc mt-2 text-justify">
            <li className="mb-0">
              Collaborated with cross-functional teams to gather requirements and implement solutions
              aligned with business objectives, employing HTML and CSS best practices to create well-structured, semantic, and accessible code while optimizing website performance and search
              engine visibility, and iteratively improving design based on user feedback and analytics
              insights.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;

