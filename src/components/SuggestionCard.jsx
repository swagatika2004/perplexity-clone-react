import "./SuggestionCard.css";

function SuggestionCard({ text }) {
  return (
    <button className="suggestion-card" type="button">
      <span>{text}</span>
    </button>
  );
}

export default SuggestionCard;
