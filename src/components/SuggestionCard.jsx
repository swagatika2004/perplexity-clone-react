
function SuggestionCard({ text }) {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl cursor-pointer hover:bg-zinc-700 transition">
      {text}
    </div>
  );
}

export default SuggestionCard;
