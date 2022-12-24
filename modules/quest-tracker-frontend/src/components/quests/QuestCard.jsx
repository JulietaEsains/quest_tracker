import { useState } from "react";
import QuestDetails from "./QuestDetails";

function QuestCard({ quest }) {
  const [extended, setExtended] = useState(false);

  return (
    <div>
      <div onClick={() => setExtended(!extended)} style={{ cursor: "pointer" }}>
        <h2>{quest.goal}</h2>
        <span>{quest.difficulty}</span>
        <span>{quest.dueDate}</span>
      </div>
      {extended && <QuestDetails quest={quest} />}
    </div>
  );
}

export default QuestCard;
