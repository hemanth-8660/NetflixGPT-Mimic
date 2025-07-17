import React from "react"

const VideoTitle = ({title, description}) => {
  return (
    <div className="absolute pt-[15%] px-10 w-screen aspect-video bg-gradient-to-r from-black opacity-80">
      <h1 className="text-4xl text-white font-bold mx-5">{title}</h1>
      <p className="w-2/4 text-md text-white py-6 mx-5">{description}</p>
      <div className="flex ">
        <button className="rounded-lg text-black text-xl bg-white py-4 px-12 m-2 hover:opacity-60">play</button>
        <button className="rounded-lg text-white text-xl bg-gray-500 py-4 px-12 m-2 ">more info</button>
      </div>
    </div>
  )
};

export default VideoTitle 