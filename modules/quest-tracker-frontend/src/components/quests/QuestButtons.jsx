import React from "react";
import { Tooltip, Button } from "@material-tailwind/react";
import ConfirmButton from "../common/buttons/ConfirmButton";
import DeleteButton from "../common/buttons/DeleteButton";

function QuestButtons({ quest, onCompleteQuest, onDeleteQuest }) {
  return (
    <>
      {!quest.completed && (
        <Tooltip
          content="Marcar como completada"
          placement="bottom"
          className="bg-gray-800 text-white p-1 rounded-md"
        >
          <Button className="mt-1 text-gray-800">
            <ConfirmButton onConfirm={onCompleteQuest} />
          </Button>
        </Tooltip>
      )}
      <Tooltip
        content="Borrar"
        placement="bottom"
        className="bg-gray-800 text-white p-1 rounded-md"
      >
        <Button className="mt-1 text-gray-800">
          <DeleteButton onDelete={onDeleteQuest} />
        </Button>
      </Tooltip>
    </>
  );
}

export default QuestButtons;
