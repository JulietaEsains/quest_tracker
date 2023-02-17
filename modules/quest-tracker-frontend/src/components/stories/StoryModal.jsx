import { createStory } from "../../services/storiesService";
import StoryForm from "./StoryForm";
import "../../assets/styles/customStyles.css";
import { useState } from "react";

function StoryModal({ handleCancel, refreshStories }) {
  const [story, setStory] = useState({
    id: 0,
    name: "",
    description: "",
    colorCode: "",
    experience: 0,
  });
  const [invalidName, setInvalidName] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [colorAlertShown, setColorAlertShown] = useState(false);

  const handleNameChange = (e) => {
    setStory({
      ...story,
      name: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setStory({
      ...story,
      description: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    if (e.target.value === "#ffffff") {
      setColorAlertShown(true);
    } else {
      setColorAlertShown(false);
      setStory({
        ...story,
        colorCode: e.target.value,
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (story.name === "" && story.description === "") {
      setInvalidName(true);
      setInvalidDescription(true);
      return;
    } else if (story.name === "") {
      setInvalidName(true);
      setInvalidDescription(false);
      return;
    } else if (story.description === "") {
      setInvalidName(false);
      setInvalidDescription(true);
      return;
    }
    createStory(story)
      .then((data) => {
        refreshStories();
        handleCancel();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="modal fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center px-1 z-25">
      <StoryForm
        story={story}
        handleNameChange={handleNameChange}
        handleDescriptionChange={handleDescriptionChange}
        handleColorChange={handleColorChange}
        colorAlertShown={colorAlertShown}
        handleCancel={handleCancel}
        invalidName={invalidName}
        invalidDescription={invalidDescription}
        handleSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default StoryModal;
