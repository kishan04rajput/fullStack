export const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React Native", "NativeWind", "ReactJS", "Tailwind"],
    },
    {
      category: "Backend",
      skills: ["Ruby on Rails", "Node.js", "Express", "REST APIs"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Postman"],
    },
  ];

  return (
    <div>
      <section className="mb-6">
        <h2 className="text-2xl font-bold border-b-2 border-black pb-1">
          SKILLS
        </h2>
        <div className="mt-4 space-y-1">
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
