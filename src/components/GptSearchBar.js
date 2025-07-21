import React, { useRef } from "react"
import lang from "../utils/lang";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { addMovies } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {

  const language = useSelector(store => store.lang.language);
  const disPatch = useDispatch();
  // attch useRef to grab input textl
  const inputText = useRef(null);

  async function handleGptSearch() {
    let msg = 'Just act as movie recomendation systems '
    msg += inputText.current.value + 'just give me movie names dont give any text/description with comma seperated in array of strings like eg:[jersey,kalki,dhoni]';

    let movies;
    try {
      const chatResults = await client.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
          {"role": "user", "content": msg},
        ],
      });
      movies = chatResults.choices[0].message.content;
      movies=JSON.parse(movies)
    } catch (err) {
      console.error("❌ OpenAI Error:", err);
      alert("Rate limit or error: " + err.message);
    }
    console.log(typeof(movies))
    // movies = ['Rocky','Moneyball','The Karate Kid','Cool Runnings', 'Chariots of Fire','Caddyshack','Jersey'];
    // movies = movies.toA
    movies = movies.map(movie => handleMovies(movie));
    movies = await Promise.all(movies);
    console.log('%^^^^^^%%%%%%%', movies)
    disPatch(addMovies(movies));
  }

  async function handleMovies(movie) {
    let result = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, API_OPTIONS);
    result = await result.json();
    return result.results;
  }

  return (
  <div className="w-full flex justify-center px-4 pt-[40%] md:pt-[10%]">
    <form 
      className="bg-black w-full max-w-xl grid grid-cols-12 gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input 
        type="text" 
        ref={inputText} 
        placeholder={lang[language].placeHolder} 
        className="border border-black p-4 col-span-9"
      />
      <button 
        className="bg-red-600 text-white p-4 col-span-3" 
        onClick={handleGptSearch}
      >
        {lang[language].search}
      </button>
    </form>
  </div>
)

  
};

export default GptSearchBar;
