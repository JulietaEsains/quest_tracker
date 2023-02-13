import StoryCard from "./StoryCard";

function StoriesList({ stories, refreshStories }) {
  if (stories.length === 0) {
    return (
      <h2 className="text-sm text-gray-500 my-3 ml-5">
        Todavía no hay nada por aquí.
      </h2>
    );
  }

  return (
    <>
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          story={story}
          refreshStories={refreshStories}
        />
      ))}
    </>
  );
}

export default StoriesList;
