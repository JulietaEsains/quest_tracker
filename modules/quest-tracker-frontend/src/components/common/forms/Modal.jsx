import FormButtons from "./FormButtons";
import StoryForm from "../../stories/StoryForm";
import SkillForm from "../../skills/SkillForm";

function Modal({
  title,
  story,
  skill,
  handleNameChange,
  handleDescriptionChange,
  handleColorChange,
  colorAlertShown,
  handleCancel,
  invalidName,
  invalidDescription,
  handleSubmit,
}) {
  return (
    <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center px-1 z-25">
      <div className="bg-white p-5 rounded-md w-6/12">
        <h2 className="font-semibold text-2xl mb-5 text-center">{title}</h2>
        {skill && (
          <SkillForm
            skill={skill}
            handleNameChange={handleNameChange}
            handleColorChange={handleColorChange}
            colorAlertShown={colorAlertShown}
            handleCancel={handleCancel}
            invalidName={invalidName}
            handleSubmit={handleSubmit}
          />
        )}
        {story && (
          <StoryForm
            story={story}
            handleNameChange={handleNameChange}
            handleDescriptionChange={handleDescriptionChange}
            handleColorChange={handleColorChange}
            colorAlertShown={colorAlertShown}
            handleCancel={handleCancel}
            invalidName={invalidName}
            invalidDescription={invalidDescription}
            handleSubmit={handleSubmit}
          />
        )}
        <FormButtons handleCancel={handleCancel} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Modal;
