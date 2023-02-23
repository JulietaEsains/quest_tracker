import { useState, useEffect } from "react";
import { findAllSkills } from "../services/skillsService";
import SectionTitle from "../components/common/sections/SectionTitle";
import BigButton from "../components/common/buttons/BigButton";
import SkillsList from "../components/skills/SkillsList";
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
      <SectionTitle title="Habilidades" />
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
