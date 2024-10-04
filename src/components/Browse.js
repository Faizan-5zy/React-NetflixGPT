import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetPopularMovies from '../utils/useGetPopularMovies'
import useGetTopRatedMovies from '../utils/useGetTopRated'
import useGetUpcomingMovies from '../utils/useGetUpcomingMovies'



const Browse = () => {

  // custom hook for fetching now playing movies 
  useGetNowPlayingMovies()
  useGetPopularMovies()
  useGetTopRatedMovies()
  useGetUpcomingMovies()

  return (
    <div>
      <Header/>  
      <MainContainer />
      <SecondaryContainer />

      {/*
       Main Container 
        -Background Video
        -Video Title
       
        Secondary Container
          - Movie List * n 
          - Movie Cards * n 
      */}
    </div>
  )
}

export default Browse