import { Tooltip, Button } from "@material-tailwind/react";
import DeleteButton from "../common/buttons/DeleteButton";

function StoryButtons({ onDeleteStory }) {
  return (
    <>
      <Tooltip
        content="Borrar"
        placement="bottom"
        className="bg-gray-800 text-white p-1 rounded-md"
      >
        <Button className="mt-1 text-gray-800">
          <DeleteButton onDelete={onDeleteStory} />
        </Button>
      </Tooltip>
    </>
  );
}

export default StoryButtons;
