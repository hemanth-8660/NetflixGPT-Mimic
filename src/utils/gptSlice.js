import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleSearchView: false,
        movies: null
    },
    reducers: {
        toggleSearch: (state) => {
            state.toggleSearchView = !state.toggleSearchView;
        },  
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        clearGpt: (state,action) => {
            state.movies = null; 
        }
    }
});

export const { toggleSearch, addMovies, clearGpt } = gptSlice.actions;
export default gptSlice.reducer;