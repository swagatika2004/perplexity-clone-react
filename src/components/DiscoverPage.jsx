

import { useState, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import NewsCard from "./NewsCard";

const CATEGORIES = ["Top", "Tech", "Finance", "Sports", "Science"];

function DiscoverPage() {
  const [category, setCategory] = useState("Top");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/discover?category=${category.toLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="discover-page p-4">
      <CategoryTabs categories={CATEGORIES} active={category} onChange={setCategory} />

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <NewsCard key={i} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DiscoverPage;
