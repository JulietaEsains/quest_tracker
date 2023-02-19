import SkillForm from "./SkillForm";
import { createSkill } from "../../services/skillsService";
import "../../assets/styles/customStyles.css";
import { useState } from "react";

function SkillModal({ handleCancel, refreshSkills }) {
  const [skill, setSkill] = useState({
    id: 0,
    name: "",
    level: 0,
    colorCode: "",
    experience: 0,
  });
  const [invalidName, setInvalidName] = useState(false);
  const [colorAlertShown, setColorAlertShown] = useState(false);

  const handleNameChange = (e) => {
    setSkill({
      ...skill,
      name: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    if (e.target.value === "#ffffff") {
      setColorAlertShown(true);
    } else {
      setColorAlertShown(false);
      setSkill({
        ...skill,
        colorCode: e.target.value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (skill.name === "") {
      setInvalidName(true);
      return;
    }
    createSkill(skill)
      .then((data) => {
        refreshSkills();
        handleCancel();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center px-1 z-25">
      <SkillForm
        skill={skill}
        handleNameChange={handleNameChange}
        handleColorChange={handleColorChange}
        colorAlertShown={colorAlertShown}
        handleCancel={handleCancel}
        invalidName={invalidName}
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default SkillModal;
