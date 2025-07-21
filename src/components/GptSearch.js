import React from "react"
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BODY } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = (props) => {
  return (
<>
  {/* Background Image */}
  <div className="fixed inset-0 -z-[52]">
    <img
      src={NETFLIX_BODY}
      alt="logo"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Foreground Content */}
  <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8">
    <GptSearchBar />
    <GptMovieSuggestions />
  </div>
</>

  )
};

export default GptSearch;
