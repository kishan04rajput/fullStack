import React from "react";
import { Education } from "./Components/Education";
import { WorkExperience } from "./Components/WorkExperience";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Additionals } from "./Components/Additionals";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
        <Header />
        <Education />
        <WorkExperience />
        <Skills />
        <Projects />
        <Additionals />
      </div>
    </div>
  );
}

export default App;
