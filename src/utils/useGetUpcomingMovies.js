import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addUpcomingMovies } from './movieSlice'


const useGetUpcomingMovies = () =>{

    const dispatch = useDispatch()
    
    const getUpcomingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

        const json = await data.json();
        // console.log("json:", json.results)
        dispatch(addUpcomingMovies(json.results))    
    }
    
    useEffect(()=>{
        getUpcomingMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useGetUpcomingMovies;