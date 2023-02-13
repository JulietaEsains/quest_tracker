import { useState } from "react";
import { findAllStories } from "../services/storiesService";
import StoriesList from "../components/stories/StoriesList";
import { useEffect } from "react";

function Stories() {
  const [stories, setStories] = useState([]);

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
      <h1 className="font-semibold text-4xl my-5 text-center text-gray-900">
        Historias
      </h1>
      <p className="ml-5">Haz click en una historia para ver su descripción.</p>
      <StoriesList stories={stories} refreshStories={findStories} />
    </div>
  );
}

export default Stories;
