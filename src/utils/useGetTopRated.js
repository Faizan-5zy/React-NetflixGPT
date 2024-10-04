import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from './constants'
import { addTopRatedMovies } from './movieSlice'


const useGetTopRatedMovies = () =>{

    const dispatch = useDispatch()
    
    const getTopRatedMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

        const json = await data.json();
        // console.log("json:", json.results)
        dispatch(addTopRatedMovies(json.results))    
    }
    
    useEffect(()=>{
        getTopRatedMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

}

export default useGetTopRatedMovies;