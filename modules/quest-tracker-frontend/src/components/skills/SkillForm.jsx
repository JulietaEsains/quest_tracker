import FormButtons from "../common/forms/FormButtons";
import ColorSelector from "../common/forms/ColorSelector";

function SkillForm({
  skill,
  handleNameChange,
  handleColorChange,
  colorAlertShown,
  handleCancel,
  invalidName,
  handleSubmit,
}) {
  return (
    <div className="bg-white p-5 rounded-md w-6/12">
      <h2 className="font-semibold text-2xl mb-5 text-center">
        Crea una nueva habilidad
      </h2>
      <form>
        <div className="flex flex-col gap-2 mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            className={
              "rounded-md pl-1 w-full border " +
              (invalidName ? "border-red-500" : "border-gray-500")
            }
            placeholder="Ej: Estudio, Limpieza, Fútbol, etc."
            onChange={handleNameChange}
          />
          {invalidName && (
            <p className="text-red-500">Tu habilidad necesita un nombre.</p>
          )}
        </div>
        <ColorSelector
          entity={skill}
          handleColorChange={handleColorChange}
          colorAlertShown={colorAlertShown}
        />
      </form>
      <FormButtons handleCancel={handleCancel} handleSubmit={handleSubmit} />
    </div>
  );
}

export default SkillForm;
