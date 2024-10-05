import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../utils/useGetNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useGetPopularMovies from '../utils/useGetPopularMovies'
import useGetTopRatedMovies from '../utils/useGetTopRated'
import useGetUpcomingMovies from '../utils/useGetUpcomingMovies'
import { useSelector } from 'react-redux'
import Gpt from './Gpt'



const Browse = () => {

  // custom hook for fetching now playing movies 
  useGetNowPlayingMovies()
  useGetPopularMovies()
  useGetTopRatedMovies()
  useGetUpcomingMovies()

  const gptView = useSelector(store=>store.gpt.showGptSearchView)
  // console.log("🚀 ~ Browse ~ gptView:", gptView)
  

  return (
    <div>
      <Header/>
      {
        gptView ? <Gpt/> : 
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      }  

      {/*

      Header
        - Netflix Logo
        - GPT Button
        - User Logo
        - SignOut Button

      Main Container 
        -Background Video
        -Video Title
       
      Secondary Container
        - Movie List * n 
        - Movie Cards * n 

      GPT Search Container 
        - Select Language

      */}
    </div>
  )
}

export default Browse