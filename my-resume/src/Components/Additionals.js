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
              100+ days streak on leetcode. With 314,372 rank
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Additionals;

