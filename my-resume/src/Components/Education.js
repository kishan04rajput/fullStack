import React from "react";

export const Education = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          EDUCATION
        </h2>
        <ul className="list-disc mt-4 pl-5">
          <li className="mb-2">
            <div className="flex justify-between items-baseline">
              <span>
                B. E. from SAL Institute of Technology & Engineering Research, Ahmedabad 2018 - 2021
              </span>
              <span className="font-semibold text-right min-w-max ml-4">
                CGPA: 8.53
              </span>
            </div>
          </li>
          <li className="mb-2">
            <div className="flex justify-between items-baseline">
              <span>
                Diploma from Government Polytechnic, Ahmedabad 2015 - 2018
              </span>
              <span className="font-semibold text-right min-w-max ml-4">
                CGPA: 7.64
              </span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Education;


