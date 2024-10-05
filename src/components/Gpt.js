import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKROUND_URL } from "../utils/constants";

const Gpt = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BACKROUND_URL}
          alt="logo"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default Gpt;
