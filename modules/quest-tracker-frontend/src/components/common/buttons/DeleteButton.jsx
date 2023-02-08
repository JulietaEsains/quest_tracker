import { AiOutlineDelete } from "react-icons/ai";

function DeleteButton({ onDelete }) {
  return (
    <button className="hover:text-red-400" onClick={onDelete}>
      <AiOutlineDelete size={15} />
    </button>
  );
}

export default DeleteButton;
