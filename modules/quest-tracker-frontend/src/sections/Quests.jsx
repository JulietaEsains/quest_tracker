import { useState, useEffect } from "react";
import QuestsList from "../components/quests/QuestsList";
import { findAllQuests } from "../services/questsService";

function Quests() {
  const [quests, setQuests] = useState([]);

  const findQuests = () => {
    findAllQuests()
      .then((data) => {
        setQuests(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    findQuests();
  }, []);

  return (
    <>
      <h1 className="font-semibold text-4xl my-5 text-center text-gray-800">
        Misiones
      </h1>
      <QuestsList quests={quests} refreshQuests={findQuests} />
    </>
  );
}

export default Quests;
