import React from "react"
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainVideo = () => {
  let movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // when you try to access movies before api call

  if (!movies) return;
  movies = movies.results[0];
  const {title, overview, id} = movies;
  return (
    <div className="m-0">
      <VideoTitle title={title} description={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
};

export default MainVideo;
