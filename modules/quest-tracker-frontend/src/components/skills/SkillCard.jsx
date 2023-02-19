import { useEffect } from "react";
import { useState } from "react";
import { findLevelPercentage } from "../../services/skillsService";

function SkillCard({ skill, refreshSkills }) {
  const [levelPercentage, setLevelPercentage] = useState(0);

  useEffect(() => {
    findLevelPercentage(skill.id)
      .then((data) => {
        setLevelPercentage(data.result);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="shadow border-t border-gray-200 my-3 p-3 mx-3">
        <div className="flex justify-between">
          <h2 className="font-semibold" style={{ color: skill.colorCode }}>
            {skill.name}
          </h2>
          {/* <div className="flex gap-3 align-middle"></div> */}
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold">Nivel {skill.level}</span>
          <div
            className="h-3 rounded-md w-8/12 mt-1"
            style={{ background: `${skill.colorCode}5f` }}
          >
            <span
              className="h-3 rounded-md block"
              style={{
                width: `${levelPercentage}%`,
                background: skill.colorCode,
              }}
            ></span>
          </div>
          <span className="font-semibold">{skill.experience} XP</span>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
