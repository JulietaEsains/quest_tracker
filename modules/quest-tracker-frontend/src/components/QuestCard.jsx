function QuestCard({ quest }) {
  return (
    <div>
      <h2>{quest.goal}</h2>
      <p>{quest.description}</p>
      <div>Dificultad: {quest.difficulty}</div>
      <div>Historia: {quest.story.name}</div>
      <h4>Habilidades que involucra</h4>
      <ul>
        {quest.skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
      <h3>Recompensas</h3>
      <ul>
        <li>{quest.gold} monedas de oro.</li>
        <li>{quest.experience} XP.</li>
      </ul>
    </div>
  );
}

export default QuestCard;
