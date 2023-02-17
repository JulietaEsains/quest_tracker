import "../../../assets/styles/customStyles.css";

function BigButton({ text, handleClick, bgColor }) {
  return (
    <button
      className={bgColor + " text-white p-2 rounded-md font-semibold btn"}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default BigButton;
