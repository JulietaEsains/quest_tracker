import SkillCard from "./SkillCard";

function SkillsList({ skills, refreshSkills }) {
  if (skills.length === 0) {
    return (
      <h2 className="text-sm text-gray-500 my-3 ml-5">
        Todavía no hay nada por aquí.
      </h2>
    );
  }

  return (
    <div className="grid grid-cols-3 mx-5">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} refreshSkills={refreshSkills} />
      ))}
    </div>
  );
}

export default SkillsList;
