import { findAllSkills } from "../services/skillsService";
import SkillsList from "../components/skills/SkillsList";
import { useState, useEffect } from "react";
import BigButton from "../components/common/buttons/BigButton";
import SkillModal from "../components/skills/SkillModal";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [modalShown, setModalShown] = useState(false);

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
      <div className="flex justify-end mr-5">
        <BigButton
          text="Nueva habilidad"
          bgColor="bg-emerald-500 hover:bg-emerald-600"
          handleClick={() => setModalShown(true)}
        />
      </div>
      <SkillsList skills={skills} refreshSkills={findSkills} />
      {modalShown && (
        <SkillModal
          handleCancel={() => setModalShown(false)}
          refreshSkills={findSkills}
        />
      )}
    </div>
  );
}

export default Skills;
