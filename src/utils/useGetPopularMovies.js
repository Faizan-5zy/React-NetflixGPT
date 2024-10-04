import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from './movieSlice'
import { API_OPTIONS } from './constants'


const useGetPopularMovies = () =>{

    const dispatch = useDispatch()
    
    const getPopularMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);

        const json = await data.json();
        // console.log("json:", json.results)
        dispatch(addPopularMovies(json.results))    
    }
    
    useEffect(()=>{
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useGetPopularMovies;