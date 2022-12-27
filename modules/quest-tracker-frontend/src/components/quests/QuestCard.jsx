import { useState } from "react";
import { deleteQuest } from "../../services/questsService";
import QuestDetails from "./QuestDetails";
import DeleteButton from "../common/buttons/DeleteButton";

function QuestCard({ quest }) {
  const [extended, setExtended] = useState(false);

  const handleQuestDeletion = () => {
    if (
      confirm(
        `¿Estás seguro/a de que quieres borrar esta misión (${quest.goal})?`
      )
    ) {
      deleteQuest(quest.id);
    }
  };

  return (
    <div className="flex">
      <div className="shadow border-t border-gray-200 rounded my-5 p-3 mx-3 w-11/12">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setExtended(!extended)}
        >
          <h2
            className="font-semibold"
            style={{ color: quest.story.colorCode }}
          >
            {quest.goal}
          </h2>
          {quest.dueDate && (
            <span className="font-normal"> fecha límite: {quest.dueDate}</span>
          )}
        </div>
        {extended && <QuestDetails quest={quest} />}
      </div>
      <div className="w-1/12 flex align-middle">
        <DeleteButton handleDeletion={handleQuestDeletion} />
      </div>
    </div>
  );
}

export default QuestCard;
