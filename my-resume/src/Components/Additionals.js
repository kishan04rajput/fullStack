import React from "react";

export const Additionals = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          ADDITIONAL
        </h2>

        {/* Additional Information */}
        <div className="mt-4">
          <ul className="list-disc list-inside list-outside">
            <li className="mb-0">
              Secured second place in the Student Startup and Innovation Policy
              (SSIP), showcasing entrepreneurial prowess and collaborative
              excellence.
            </li>
            <li className="mb-0">
              Mastered in Data Structures and Algorithms challenges, honing
              troubleshooting skills and cultivating a profound grasp of
              algorithmic principles.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Additionals;
