import "./DiscoverCard.css";

function DiscoverCard({ article }) {
  return (
    <article className="discover-card">
      <img src={article.image} alt={article.title} />

      <div className="discover-card-body">
        <h3 className="discover-card-title">{article.title}</h3>
        <p className="discover-card-description">{article.description}</p>
      </div>
    </article>
  );
}

export default DiscoverCard;
