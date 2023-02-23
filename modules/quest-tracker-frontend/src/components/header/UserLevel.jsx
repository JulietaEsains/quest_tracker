import { useState, useEffect } from "react";
import { findLevelPercentage } from "../../services/userService";
import PercentageBar from "../common/ui/PercentageBar";

function UserLevel({ user, refreshUser }) {
  const [levelPercentage, setLevelPercentage] = useState(0);

  useEffect(() => {
    findLevelPercentage()
      .then((data) => {
        setLevelPercentage(data.result);
        refreshUser();
      })
      .catch((error) => {
        console.error(error);
      });
  }, [levelPercentage]);

  return (
    <div>
      Nivel {user.level}
      <PercentageBar
        colorCode="#10B981"
        percentage={levelPercentage}
        customClassName="my-2"
      />
      <div className="font-normal">
        Faltan
        <span className="text-emerald-500 font-semibold">
          {" " + user.experienceForNextLevel + " XP "}
        </span>
        para el próximo nivel
      </div>
    </div>
  );
}

export default UserLevel;
