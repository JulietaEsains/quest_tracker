import ColorSelector from "../common/forms/ColorSelector";

function StoryForm({
  story,
  handleNameChange,
  handleDescriptionChange,
  handleColorChange,
  colorAlertShown,
  invalidName,
  invalidDescription,
}) {
  return (
    <form>
      <div className="flex flex-col gap-2 mb-3">
        <label>Nombre épico:</label>
        <input
          type="text"
          className={
            "rounded-md pl-1 w-full border " +
            (invalidName ? "border-red-500" : "border-gray-500")
          }
          placeholder="En busca de ser el estudiante perfecto"
          onChange={handleNameChange}
        />
        {invalidName && (
          <p className="text-red-500">Tu historia necesita un nombre.</p>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label>¿De qué se trata?</label>
        <textarea
          type="text"
          className={
            "rounded-md pl-1 w-full resize-none border " +
            (invalidDescription ? "border-red-500" : "border-gray-500")
          }
          rows={6}
          cols={0}
          placeholder="Si tu objetivo es, por ejemplo, tener buenas notas en la escuela o universidad, ¡esta historia estaría vinculada a todas tus futuras misiones que tengan que ver con eso!"
          onChange={handleDescriptionChange}
        />
        {invalidDescription && (
          <p className="text-red-500">
            Tu historia necesita una descripción, aunque sea corta.
          </p>
        )}
      </div>
      <ColorSelector
        entity={story}
        handleColorChange={handleColorChange}
        colorAlertShown={colorAlertShown}
      />
    </form>
  );
}

export default StoryForm;
