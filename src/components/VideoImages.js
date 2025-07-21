import React, { useState } from "react";
import { IMG_CDN } from "../utils/constants";

const VideoImages = ({ posterId, title, description = "No description available." }) => {
  const [showPopup, setShowPopup] = useState(false);

  if (!posterId) return null;

  return (
    <>
      {/* Thumbnail Image */}
      <img
        alt="movie"
        className="w-[150px] h-[250px] object-cover rounded-lg flex-shrink-0 cursor-pointer"
        src={`${IMG_CDN}${posterId}`}
        onClick={() => setShowPopup(true)}
      />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 max-w-sm w-full mx-4 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <img
              src={`${IMG_CDN}${posterId}`}
              alt="movie"
              className="w-full h-[300px] object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoImages;
