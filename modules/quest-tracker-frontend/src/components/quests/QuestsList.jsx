import QuestCard from "./QuestCard";

function QuestsList({ quests, refreshQuests, refreshUser }) {
  if (quests.length === 0) {
    return (
      <h2 className="text-sm text-gray-500 my-3 ml-5">
        Todavía no hay nada por aquí.
      </h2>
    );
  }

  return (
    <>
      {quests.map((quest) => (
        <QuestCard
          quest={quest}
          key={quest.id}
          refreshQuests={refreshQuests}
          refreshUser={refreshUser}
        />
      ))}
    </>
  );
}

export default QuestsList;
