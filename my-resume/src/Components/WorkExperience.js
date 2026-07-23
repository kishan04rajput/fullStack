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
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Independently architected and built Housie Hub from scratch, a core internal operations application across iOS and Android using React Native, NativeWind, and Ruby on Rails, taking complete end-to-end ownership of system architecture.
            </li>
            <li>
              Engineered vital operational workflows including real-time order processing, automated packer allocation, and rider tracking modules to streamline order fulfillment and boost overall business efficiency.
            </li>
          </ul>
        </div>

        {/* Cital | Software Engineer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Cital | Software Engineer</h3>
            <p className="text-sm">Feb '25 - Feb '26</p>
          </div>
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Spearheaded full-stack development initiatives using React Native for cross-platform mobile apps (Android & iOS) and ReactJS for responsive web interfaces, backed by scalable Ruby on Rails RESTful APIs.
            </li>
            <li>
              Architected robust backend API endpoints and database solutions while optimizing frontend component rendering and app load speed for enhanced user experience across devices.
            </li>
            <li>
              Collaborated with cross-functional product teams to deliver high-quality applications on schedule and mentored junior developers in modern development practices.
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
          <ul className="list-disc mt-2 pl-5 text-justify space-y-1">
            <li>
              Designed and developed well-structured, semantic, and responsive website layouts using HTML5, CSS3, and JavaScript best practices.
            </li>
            <li>
              Optimized website load performance, search engine visibility (SEO), and cross-browser accessibility, iteratively refining design based on analytics insights.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;

