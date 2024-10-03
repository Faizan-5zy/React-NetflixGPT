import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {

  // custom hook for fetching now playing movies 
  useGetNowPlayingMovies()

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