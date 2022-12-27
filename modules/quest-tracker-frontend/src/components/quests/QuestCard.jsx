import { useState } from "react";
import QuestDetails from "./QuestDetails";

function QuestCard({ quest }) {
  const [extended, setExtended] = useState(false);

  return (
    <div className="shadow border-t border-gray-200 rounded my-5 p-3 mx-3">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setExtended(!extended)}
      >
        <h2 className="font-semibold" style={{ color: quest.story.colorCode }}>
          {quest.goal}
          {quest.dueDate && (
            <span className="font-normal"> (fecha límite: {quest.dueDate})</span>
          )}
        </h2>
        <span className="font-semibold text-gray-900">{quest.difficulty}</span>
      </div>
      {extended && <QuestDetails quest={quest} />}
    </div>
  );
}

export default QuestCard;
