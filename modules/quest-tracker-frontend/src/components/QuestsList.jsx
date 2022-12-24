import QuestCard from "./QuestCard";

function QuestsList({ quests }) {
  if (quests.length === 0) {
    return <h2>Todavía no tienes ninguna misión.</h2>;
  }

  return (
    <>
      {quests.map((quest) => (
        <QuestCard quest={quest} key={quest.id} />
      ))}
    </>
  );
}

export default QuestsList;
