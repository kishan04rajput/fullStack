export const Skills = () => {
  const skillCategories = [
    {
      category: "Mobile & Frontend",
      skills: ["React Native", "ReactJS", "NativeWind", "Tailwind"],
    },
    {
      category: "Backend & Databases",
      skills: ["Ruby on Rails", "NodeJS", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Languages & Core",
      skills: ["HTML", "CSS", "JavaScript", "C++", "Data Structures & Algorithms"],
    },
    {
      category: "Tools & Practices",
      skills: ["Git", "Troubleshooting"],
    },
  ];

  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          SKILLS
        </h2>
        <div className="mt-4 space-y-3">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline">
              <span className="font-semibold text-gray-900 w-48 shrink-0">
                {cat.category}:
              </span>
              <span className="text-gray-700">
                {cat.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};