import React from "react";

export const WorkExperience = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          WORK EXPERIENCES
        </h2>

        {/* CodSoft | Java Developer */}
        <div className="mt-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">CodSoft | Java Developer</h3>
            <p className="text-sm">May '24 - Jun '24</p>
          </div>
          <ul className="list-disc mt-2 text-justify">
            <li className="mb-0">
              Orchestrated the development of a Number Game application,
              leveraging Java to generate random numbers and engage users in
              interactive guessing sessions, enhancing user engagement and
              logical thinking skills.
            </li>
            <li className="mb-0">
              Spearheaded the implementation of a Student Grade Calculator,
              meticulously calculating total marks, average percentages, and
              assigning grades based on user inputs, resulting in streamlined
              academic assessment processes and improved data accuracy.
            </li>
            <li className="mb-0">
              Innovated the ATM Interface, integrating robust functionalities
              like withdrawing, depositing, and balance checking, enhancing user
              convenience and security measures, contributing to a more
              intuitive and efficient banking experience.
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
              Collaborating closely with cross-functional teams to gather
              requirements, conceptualize designs, and implement solutions that
              aligned with business objectives.
            </li>
            <li className="mb-0">
              Employing best practices in HTML and CSS to create
              well-structured, semantic, and accessible code, optimizing website
              performance and search engine visibility.
            </li>
            <li className="mb-0">
              Iteratively improving website design and functionality based on
              user feedback, analytics insights, and industry trends to drive
              continuous enhancement and innovation.
            </li>
            <li className="mb-0">
              Executed front-end development techniques to enhance user
              experience, integrating emerging technologies and design trends to
              drive innovation and maintain competitive advantage within the
              industry.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
