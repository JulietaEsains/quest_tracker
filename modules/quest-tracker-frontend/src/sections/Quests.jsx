import { useState, useEffect } from "react";
import QuestsList from "../components/QuestsList";
import { findAllQuests } from "../services/questsService";

function Quests() {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    findAllQuests()
      .then((data) => setQuests(data))
      .catch((error) => console.log(error));
  }, [quests]);

  return (
    <>
      <QuestsList quests={quests} />
    </>
  );
}

export default Quests;
