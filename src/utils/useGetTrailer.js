import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";



const useGetTrailer=( movieId )=>{
  // const [trailerID,setTrailerID]=useState(null) instead of state variable we can use from redux store
  const dispatch = useDispatch()
  const trailerData = useSelector(store=>store.movies?.trailerVideo)
  console.log("🚀 ~ VideoBackground ~ trailerData:", trailerData)
  // console.log("movieId:", movieId)

  useEffect(() => {
    getTrailerVideo();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+ movieId +"/videos?language=en-US",
      // "https://api.themoviedb.org/3/movie/519182/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
console.log('json',json)
console.log('json.results',json.results)
    const trailer = json.results.filter(
      (video) => video.name === "Official Trailer" && video.type === "Trailer"
    );

    // setTrailerID(trailer[0].key)  instead of state variable we can use from redux store

    dispatch(addTrailerVideo(trailer))

  };


  return trailerData;
}

export default useGetTrailer;
