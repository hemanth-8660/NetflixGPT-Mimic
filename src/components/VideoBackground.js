import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
const VideoBackground = ({movieId}) => {
    const dispatch = useDispatch();
    const [trailerVideo, setTrailerVideo] = useState(null);
    // const trailer = useSelector(store => store.videos?.trailerVideo);
    async function getVideos() {
        let videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        videos = await videos.json();
        if (!videos || !videos.results) return;
        const trailer = videos.results.find(
            (v) => v.type === "Trailer" && v.site === "YouTube"
        );
        // if (trailerVideo) dispatch(addTrailer(trailerVideo));
        setTrailerVideo(trailer)
    }

    useEffect(() => {
        // get all videos assocaitd to movieid
        getVideos();
    }, [])

    if (!trailerVideo) return;
  return (
    <div>
      <iframe 
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1`} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin" 
       ></iframe>
    </div>
  )
};

export default VideoBackground;
