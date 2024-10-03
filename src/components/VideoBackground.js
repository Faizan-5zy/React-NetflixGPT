import React from "react";
import useGetTrailer from "../utils/useGetTrailer";

const VideoBackground = ({ movieId }) => {

  // custom hook to fetch and store trailer video //modular coding // seperation of concerns // optimiztion // readable
const trailerData = useGetTrailer( movieId )

  return (
    <div>
      <iframe
        className="w-screen h-full aspect-video "
        src={"https://www.youtube.com/embed/"+ trailerData[0]?.key + '?&autoplay=1&mute=1&start=19&controls=0&modestbranding=1&showinfo=0' }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen 
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
