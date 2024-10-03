import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:{},
        trailerVideo:{}
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo} = movies.actions 
export default movies.reducer 