function ColorSelector({ entity, handleColorChange, colorAlertShown }) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <label>Color para identificarla:</label>
        <input
          type="color"
          className="cursor-pointer bg-transparent color-selector"
          onChange={handleColorChange}
        />
      </div>
      <p className="font-semibold" style={{ color: entity.colorCode }}>
        Vista previa de color
      </p>
      {colorAlertShown && (
        <p className="text-red-500">
          Advertencia: el color blanco no se va a visualizar correctamente con
          el fondo blanco de la aplicación. Elige un color más oscuro.
        </p>
      )}
    </>
  );
}

export default ColorSelector;
