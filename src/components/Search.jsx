import "./Search.css";
import SuggestionCard from "./SuggestionCard";

import {
  FiSearch,
  FiGlobe,
  FiPaperclip,
  FiArrowRight,
} from "react-icons/fi";

import { BsStars } from "react-icons/bs";
import { RiQuillPenLine } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { TbMathSymbols } from "react-icons/tb";

const suggestions = [
  "Why is the sky blue?",
  "Best productivity apps in 2024",
  "Explain quantum computing",
  "Latest research on climate change",
];

function Search() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>Where knowledge begins</h1>
        <p>Ask anything. Get answers backed by real-time sources.</p>
      </div>

      <div className="search-box">
        <input type="text" placeholder="Ask anything..." />

        <div className="search-bottom">
          <div className="left-icons">
            <button type="button">
              <FiSearch />
            </button>
            <button type="button">
              <BsStars />
            </button>
            <button type="button">
              <FiGlobe />
            </button>
            <button type="button">
              <FiPaperclip />
            </button>
          </div>

          <div className="right-side">
            <div className="pro-toggle">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <span>Pro</span>
            </div>
            <button className="send-btn" type="button">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="active" type="button">
          <FiSearch /> Ask
        </button>
        <button type="button">
          <BsStars /> Research
        </button>
        <button type="button">
          <RiQuillPenLine /> Write
        </button>
        <button type="button">
          <LuBrainCircuit /> Analyze
        </button>
        <button type="button">
          <TbMathSymbols /> Solve
        </button>
      </div>

      <div className="suggestions-row">
        {suggestions.map((text, index) => (
          <SuggestionCard key={index} text={text} />
        ))}
      </div>
    </section>
  );
}

export default Search;