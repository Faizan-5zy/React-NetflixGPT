import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:[],
        popularMovies:[],
        topRatedMovies:[],
        upcomingMovies:[],
        trailerVideo:{}
    },
    reducers:{
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addUpcomingMovies,addTopRatedMovies,addPopularMovies,addNowPlayingMovies,addTrailerVideo} = movies.actions 
export default movies.reducer 