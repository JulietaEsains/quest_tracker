import { BiPencil } from "react-icons/bi";

function EditButton({ handleEdition }) {
  return (
    <button className="hover:text-blue-400" onClick={handleEdition}>
      <BiPencil />
    </button>
  );
}

export default EditButton;
