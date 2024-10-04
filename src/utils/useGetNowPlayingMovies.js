import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from './movieSlice'
import { API_OPTIONS } from './constants'


const useGetNowPlayingMovies = () =>{

    const dispatch = useDispatch()
    
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

        // fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)

        const json = await data.json();
        // console.log("json:", json.results)
        dispatch(addNowPlayingMovies(json.results))    
    }
    
    useEffect(()=>{
        getNowPlayingMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useGetNowPlayingMovies;