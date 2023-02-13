import { useState } from "react";
import "../../assets/styles/customStyles.css";

function StoryCard({ story, refreshStories }) {
  const [extended, setExtended] = useState(false);

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
