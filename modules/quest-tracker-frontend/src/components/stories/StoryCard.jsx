import { deleteStory } from "../../services/storiesService";
import { useState } from "react";
import StoryButtons from "./StoryButtons";
import "../../assets/styles/customStyles.css";

function StoryCard({ story, refreshStories }) {
  const [extended, setExtended] = useState(false);

  const handleStoryDeletion = () => {
    if (
      confirm(
        `¿Estás seguro/a de que quieres borrar esta historia (${story.name})?`
      )
    ) {
      deleteStory(story.id)
        .then((data) => refreshStories())
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <div className="shadow border-t border-gray-200 rounded my-5 p-3 mx-5">
        <div className="flex justify-between">
          <h2
            className="font-semibold cursor-pointer card-title"
            style={{ color: story.colorCode }}
            onClick={() => setExtended(!extended)}
          >
            {story.name}
          </h2>

          <div className="flex gap-3 align-middle">
            <span className="text-emerald-500 font-semibold">
              {story.experience} XP
            </span>
            <StoryButtons onDeleteStory={handleStoryDeletion} />
          </div>
        </div>
        <div className={extended ? "open-details" : "closed-details"}>
          <p className="mt-2">{story.description}</p>
        </div>
      </div>
    </div>
  );
}

export default StoryCard;
