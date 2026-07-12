

import DiscoverCard from "./DiscoverCard";

const articles = [
  {
    title: "OpenAI launches new model",
    description: "The latest AI model improves coding and reasoning.",
    image: "https://picsum.photos/400/250?1"
  },
  {
    title: "React 19 Released",
    description: "React introduces new features for developers.",
    image: "https://picsum.photos/400/250?2"
  },
  {
    title: "Apple AI Updates",
    description: "Apple announced several AI-powered features.",
    image: "https://picsum.photos/400/250?3"
  }
];

function Discover() {
  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-4">
        Discover
      </h2>

      <div className="grid md:grid-cols-3 gap-5">
        {articles.map((item, index) => (
          <DiscoverCard
            key={index}
            article={item}
          />
        ))}
      </div>

    </div>
  );
}

export default Discover;
