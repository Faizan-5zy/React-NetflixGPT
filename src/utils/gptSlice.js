import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
        name : 'gpt',
        initialState:  {
            showGptSearchView:false,
            gptContainer:[],
        },
        reducers:{
            toggleGptSearchView:(state)=>{
                state.showGptSearchView = !state.showGptSearchView
            },
            addToGpt:(state,action)=>{
                state.gptContainer.push(action.payload)
            }
        }
})

export const {toggleGptSearchView,addToGpt} = gptSlice.actions;
export default gptSlice.reducer;