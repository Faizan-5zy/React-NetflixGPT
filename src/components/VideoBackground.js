import React from "react";
import useGetTrailer from "../utils/useGetTrailer";
import ShimmerTrailer from "./ShimmerTrailer";

const VideoBackground = ({ movieId }) => {

  // custom hook to fetch and store trailer video //modular coding // seperation of concerns // optimiztion // readable
  const trailerData = useGetTrailer( movieId )


  if (!trailerData || trailerData.length === 0) {
    return <div><ShimmerTrailer /></div>; // Optionally show a loading state
  }

  return (
    <div>
      <iframe
        className="w-full h-full aspect-video "
        src={"https://www.youtube.com/embed/"+ trailerData[0]?.key + '?&autoplay=1&mute=1&start=19&controls=0&modestbranding=1&showinfo=0' }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
