function QuestDetails({ quest }) {
  return (
    <div>
      <p className="my-2">{quest.description}</p>
      <h3 className="font-semibold">
        Historia: <span className="font-normal">{quest.story.name}</span>
      </h3>
      <h3 className="font-semibold">
        Dificultad:{" "}
        <span className="font-normal">{quest.difficulty.toLowerCase()}</span>
      </h3>

      <h3 className="font-semibold">Habilidades que involucra:</h3>
      <ul className="my-3">
        {quest.skills.map((skill) => (
          <li
            key={skill.id}
            style={{ background: skill.colorCode }}
            className="p-2 text-white inline mr-3 rounded-full text-sm"
          >
            {skill.name}
          </li>
        ))}
      </ul>
      <h3 className="font-semibold">Recompensas:</h3>
      <ul className="list-disc ml-10">
        <li>{quest.gold} monedas de oro.</li>
        <li>{quest.experience} XP.</li>
      </ul>
    </div>
  );
}

export default QuestDetails;
