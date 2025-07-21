import {useSelector } from "react-redux";
import VideoList from "./VideoList";

const GptMovieSuggestions = (props) => {
  const movies = useSelector(store => store.gpt.movies);
   console.log('&&', movies)
  if (!movies) return null;
  // console.log('&&', gpt.movies)
  return (
<div className="p-4 md:m-20 m-4 w-full max-w-7xl mx-auto text-white bg-black bg-opacity-90">
  {movies.map((m, ind) => (
    <VideoList key={ind} movies={m} />
  ))}
</div>

  )
};

export default GptMovieSuggestions;
