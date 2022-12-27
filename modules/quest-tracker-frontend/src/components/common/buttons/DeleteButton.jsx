import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({ handleDeletion }) {
  return (
    <button className="hover:text-red-400" onClick={handleDeletion}>
      <AiOutlineDelete />
    </button>
  );
}

export default DeleteButton;
