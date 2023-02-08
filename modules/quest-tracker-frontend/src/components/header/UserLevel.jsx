import { useState, useEffect } from "react";
import { findLevelPercentage } from "../../services/userService";

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
      <div className="bg-emerald-200 h-3 rounded-md my-2">
        <span
          className="bg-emerald-500 h-3 rounded-md block"
          style={{ width: `${levelPercentage}%` }}
        ></span>
      </div>
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
