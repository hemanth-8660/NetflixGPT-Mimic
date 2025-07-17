import React from "react"
import {IMG_CDN} from "../utils/constants";
const VideoImages = ({ posterId }) => {
  return (
    <img
      alt="movies"
      className="w-[150px] h-[250px] object-cover rounded-lg flex-shrink-0"
      src={`${IMG_CDN}${posterId}`}
    />
  );
};


export default VideoImages;
