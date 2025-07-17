import React from "react"
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BODY } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = (props) => {
  return (
    <div>
      <div className="absolute -z-[52]">
        <img src={NETFLIX_BODY} alt="logo"/>
      </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    
  )
};

export default GptSearch;
