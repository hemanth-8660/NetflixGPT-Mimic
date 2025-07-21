import React from "react"
import { useSelector } from "react-redux";
import VideoList from "./VideoList";
// import movieSlice from "../utils/movieSlice";

const SecondaryVideo = () => {
    // get all types of videos from the store
const videos = useSelector(store => store.movies);
const nowPlayingMovies = videos.nowPlayingMovies?.results;
const popularMovies = videos.popularMovies?.results;
const topRatesMovies = videos.topRatedMovies?.results;
const upComingMovies = videos.upComingMovies?.results;
  return (
    <div className="bg-black">
      <div className="-mt-[20px]">
          <VideoList title='Now Playing' movies = {nowPlayingMovies}/>
          <VideoList title='Trending' movies = {popularMovies}/>
          <VideoList title='Top Rated Movies' movies = {topRatesMovies}/>
      </div>
      <VideoList title='UpComing Movies' movies = {upComingMovies}/>
    </div>
  )
};

export default SecondaryVideo;
