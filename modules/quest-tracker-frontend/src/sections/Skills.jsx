import { findAllSkills } from "../services/skillsService";
import SkillsList from "../components/skills/SkillsList";
import { useState, useEffect } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);

  const findSkills = () => {
    findAllSkills()
      .then((data) => setSkills(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    findSkills();
  }, []);

  return (
    <div className="w-11/12 section">
      <h1 className="font-semibold text-4xl my-5 text-center text-gray-900">
        Habilidades
      </h1>
      <SkillsList skills={skills} refreshSkills={findSkills} />
    </div>
  );
}

export default Skills;
