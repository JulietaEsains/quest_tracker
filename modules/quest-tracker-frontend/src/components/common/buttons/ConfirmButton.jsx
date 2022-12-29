import { BiCheck } from "react-icons/bi";

function ConfirmButton({ handleConfirmation }) {
  return (
    <button
      className="text-lg hover:text-green-400"
      onClick={handleConfirmation}
    >
      <BiCheck />
    </button>
  );
}

export default ConfirmButton;
