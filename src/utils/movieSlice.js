import {createSlice} from "@reduxjs/toolkit";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import { act } from "react";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        } 
    }
})

export const {addNowPlaying, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;