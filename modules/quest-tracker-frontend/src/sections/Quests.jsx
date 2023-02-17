import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  findAllPendingQuests,
  findAllCompletedQuests,
} from "../services/questsService";
import QuestsList from "../components/quests/QuestsList";
import "../assets/styles/customStyles.css";

function Quests({ refreshUser }) {
  const [pendingQuests, setPendingQuests] = useState([]);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [completedQuestsShown, setCompletedQuestsShown] = useState(false);

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
        questShown={true}
      />
      <div
        className="inline-flex items-center gap-2 cursor-pointer completed-quests-title"
        onClick={() => setCompletedQuestsShown(!completedQuestsShown)}
      >
        <h2 className="font-semibold text-xl ml-5 text-gray-900">
          Completadas
        </h2>
        {completedQuestsShown ? (
          <IoIosArrowUp className="mt-2 text-emerald-500" size={20} />
        ) : (
          <IoIosArrowDown className="mt-2 text-emerald-500" size={20} />
        )}
      </div>
      <QuestsList
        quests={completedQuests}
        refreshQuests={findQuests}
        refreshUser={refreshUser}
        questShown={completedQuestsShown}
      />
    </div>
  );
}

export default Quests;
