import BigButton from "../buttons/BigButton";

function FormButtons({ handleCancel, handleSubmit }) {
  return (
    <div className="flex gap-3 justify-end">
      <BigButton
        text="Cancelar"
        bgColor="bg-red-500 hover:bg-red-600"
        handleClick={handleCancel}
      />
      <BigButton
        text="Crear"
        bgColor="bg-emerald-500 hover:bg-emerald-600"
        handleClick={handleSubmit}
      />
    </div>
  );
}

export default FormButtons;
