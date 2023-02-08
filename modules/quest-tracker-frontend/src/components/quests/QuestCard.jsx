import { useState, useEffect } from "react";
import {
  completeQuest,
  deleteQuest,
  findFormattedDueDate,
} from "../../services/questsService";
import QuestButtons from "./QuestButtons";
import QuestDetails from "./QuestDetails";
import "../../assets/styles/customStyles.css";

function QuestCard({ quest, refreshQuests, refreshUser }) {
  const [extended, setExtended] = useState(false);
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    findFormattedDueDate(quest.id)
      .then((data) => {
        setDueDate(data.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dueDate]);

  const handleQuestCompletion = () => {
    completeQuest(quest.id)
      .then((data) => {
        alert(
          `¡Misión '${data.goal}' completada! Ahora tienes más oro, más experiencia y has progresado en algunas habilidades.`
        );
        refreshQuests();
        refreshUser();
      })
      .catch((error) => console.error(error));
  };

  const handleQuestDeletion = () => {
    if (
      confirm(
        `¿Estás seguro/a de que quieres borrar esta misión (${quest.goal})?`
      )
    ) {
      deleteQuest(quest.id)
        .then((data) => refreshQuests())
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className={quest.completed ? "bg-gray-50" : "bg-white"}>
      <div className="shadow border-t border-gray-200 rounded my-5 p-3 mx-5">
        <div className="flex justify-between">
          <h2
            className="font-semibold cursor-pointer quest-title"
            style={{ color: quest.story.colorCode }}
            onClick={() => setExtended(!extended)}
          >
            {quest.goal}
          </h2>

          <div className="flex gap-3 align-middle">
            {quest.dueDate && (
              <span className="font-normal"> fecha límite: {dueDate}</span>
            )}
            <QuestButtons
              quest={quest}
              onCompleteQuest={handleQuestCompletion}
              onDeleteQuest={handleQuestDeletion}
            />
          </div>
        </div>
        <QuestDetails quest={quest} extended={extended} />
      </div>
    </div>
  );
}

export default QuestCard;
