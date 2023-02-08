import { BiCheck } from "react-icons/bi";

function ConfirmButton({ onConfirm }) {
  return (
    <button className="text-lg hover:text-green-400" onClick={onConfirm}>
      <BiCheck />
    </button>
  );
}

export default ConfirmButton;
