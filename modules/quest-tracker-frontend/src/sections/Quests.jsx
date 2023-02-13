import { useState, useEffect } from "react";
import {
  findAllPendingQuests,
  findAllCompletedQuests,
} from "../services/questsService";
import QuestsList from "../components/quests/QuestsList";

function Quests({ refreshUser }) {
  const [pendingQuests, setPendingQuests] = useState([]);
  const [completedQuests, setCompletedQuests] = useState([]);

  const findQuests = () => {
    findAllPendingQuests()
      .then((data) => {
        setPendingQuests(data);
      })
      .catch((error) => console.error(error));
    findAllCompletedQuests()
      .then((data) => {
        setCompletedQuests(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    findQuests();
  }, []);

  return (
    <div className="w-11/12 section">
      <h1 className="font-semibold text-4xl my-5 text-center text-gray-900">
        Misiones
      </h1>
      <p className="ml-5">Haz click en una misión para ver más detalles.</p>
      <QuestsList
        quests={pendingQuests}
        refreshQuests={findQuests}
        refreshUser={refreshUser}
      />
      <h2 className="font-semibold text-xl ml-5 text-gray-900">Completadas</h2>
      <QuestsList
        quests={completedQuests}
        refreshQuests={findQuests}
        refreshUser={refreshUser}
      />
    </div>
  );
}

export default Quests;
