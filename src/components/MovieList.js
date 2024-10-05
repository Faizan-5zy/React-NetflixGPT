import React from 'react'
import MovieCard from './MovieCard'


const MovieList = ({title , movies}) => {
  // console.log("🚀 ~ MovieList ~ movies:", movies)
  return (
    <div className='py-4 px-8 max-w-full  text-white z-10'> 

    <h1 className='text-3xl  pb-4 '>{title}</h1>
      <div className='flex overflow-x-scroll  no-scrollbar max-w-full'>
        <div className='flex '>
        {movies?.map((movie)=><MovieCard  key={movie?.id} posterPath={movie?.poster_path}/>)}
        </div>
      </div>
  
    </div>
  )
}

export default MovieList

