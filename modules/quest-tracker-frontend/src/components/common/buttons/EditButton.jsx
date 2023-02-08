import { BiPencil } from "react-icons/bi";

function EditButton({ onEdit }) {
  return (
    <button className="hover:text-blue-400" onClick={onEdit}>
      <BiPencil size={15} />
    </button>
  );
}

export default EditButton;
