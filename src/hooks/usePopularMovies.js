import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../utils/movieSlice";
import React, { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const disPatch = useDispatch();
    useEffect(() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies() {
        let movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        movies = await movies.json();
        disPatch(addPopularMovies(movies));
    }
};

export default usePopularMovies;
