import "./Search.css";

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

function Search() {
  return (
    <section className="hero">

      <h1>Where knowledge begins</h1>

      <p>
        Ask anything. Get answers backed by real-time sources.
      </p>

      <div className="search-box">

        <input
          type="text"
          placeholder="Ask anything..."
        />

        <div className="search-bottom">

          <div className="left-icons">
            <button>
              <FiSearch />
            </button>

            <button>
              <BsStars />
            </button>

            <button>
              <FiGlobe />
            </button>

            <button>
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

            <button className="send-btn">
              <FiArrowRight />
            </button>

          </div>

        </div>

      </div>

      <div className="actions">

        <button className="active">
          <FiSearch />
          Ask
        </button>

        <button>
          <BsStars />
          Research
        </button>

        <button>
          <RiQuillPenLine />
          Write
        </button>

        <button>
          <LuBrainCircuit />
          Analyze
        </button>

        <button>
          <TbMathSymbols />
          Solve
        </button>

      </div>

    </section>
  );
}

export default Search;