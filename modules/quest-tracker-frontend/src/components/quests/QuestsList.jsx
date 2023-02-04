import QuestCard from "./QuestCard";

function QuestsList({ quests, refreshQuests }) {
  if (quests.length === 0) {
    return (
      <h2 className="text-2xl mt-3 ml-5">Todavía no tienes ninguna misión.</h2>
    );
  }

  return (
    <>
      <p className="ml-5">Haz click en una misión para ver más detalles.</p>
      {quests.map((quest) => (
        <QuestCard quest={quest} key={quest.id} refreshQuests={refreshQuests} />
      ))}
    </>
  );
}

export default QuestsList;
