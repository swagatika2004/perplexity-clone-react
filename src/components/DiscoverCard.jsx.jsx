

function DiscoverCard({ article }) {
  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden hover:scale-105 transition">

      <img
        src={article.image}
        alt={article.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {article.title}
        </h3>

        <p className="text-gray-400 mt-2">
          {article.description}
        </p>
      </div>

    </div>
  );
}

export default DiscoverCard;
