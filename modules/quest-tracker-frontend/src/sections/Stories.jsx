import { useState, useEffect } from "react";
import { findAllStories } from "../services/storiesService";
import SectionTitle from "../components/common/sections/SectionTitle";
import BigButton from "../components/common/buttons/BigButton";
import StoriesList from "../components/stories/StoriesList";
import StoryModal from "../components/stories/StoryModal";

function Stories() {
  const [stories, setStories] = useState([]);
  const [modalShown, setModalShown] = useState(false);

  const findStories = () => {
    findAllStories()
      .then((data) => setStories(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    findStories();
  }, []);

  return (
    <div className="w-11/12 section">
      <SectionTitle title="Historias" />
      <div className="flex justify-between">
        <p className="ml-5">
          Haz click en una historia para ver su descripción.
        </p>
        <div className="mr-5">
          <BigButton
            text="Nueva historia"
            bgColor="bg-emerald-500 hover:bg-emerald-600"
            handleClick={() => setModalShown(true)}
          />
        </div>
      </div>
      <StoriesList stories={stories} refreshStories={findStories} />
      {modalShown && (
        <StoryModal
          handleCancel={() => setModalShown(false)}
          refreshStories={findStories}
        />
      )}
    </div>
  );
}

export default Stories;
