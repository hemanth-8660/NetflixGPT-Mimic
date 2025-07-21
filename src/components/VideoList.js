import React from "react"
import VideoImages from "./VideoImages";
const VideoList = ({title, movies}) => {
  return (
   <div className="pt-4">
    <h1 className="font-bold text-2xl text-white">{title}</h1>
    <div className="flex overflow-x-scroll space-x-4 no-scrollbar pt-4">
      {movies?.map((m) => (
        <VideoImages key={m.id} posterId={m.poster_path} title={m.title}/>
      ))}
  </div>
</div>



  )
};

export default VideoList;
