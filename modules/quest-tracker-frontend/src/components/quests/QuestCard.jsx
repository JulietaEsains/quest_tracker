import { Tooltip, Button } from "@material-tailwind/react";
import { useState, useEffect } from "react";
import {
  deleteQuest,
  findFormattedDueDate,
} from "../../services/questsService";
import QuestDetails from "./QuestDetails";
import DeleteButton from "../common/buttons/DeleteButton";

function QuestCard({ quest, refreshQuests }) {
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
    <div>
      <div className="shadow border-t border-gray-200 rounded my-5 p-3 mx-5">
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

          <div className="flex gap-3 align-middle">
            {quest.dueDate && (
              <span className="font-normal"> fecha límite: {dueDate}</span>
            )}
            <Tooltip
              content="Borrar"
              placement="bottom"
              className="bg-gray-800 text-white p-1 rounded-md"
            >
              <Button className="mt-1 text-gray-800">
                <DeleteButton handleDeletion={handleQuestDeletion} />
              </Button>
            </Tooltip>
          </div>
        </div>
        <QuestDetails quest={quest} extended={extended} />
      </div>
    </div>
  );
}

export default QuestCard;
