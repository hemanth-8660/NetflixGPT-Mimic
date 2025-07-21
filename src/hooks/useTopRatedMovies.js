import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addTopRatedMovies} from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const top_rated = useSelector(store => store.movies.topRatedMovies);
    useEffect(() => {
        !top_rated && fetchData();
    }, [])

    async function fetchData() {
        let res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        res = await res.json();
        dispatch(addTopRatedMovies(res))
    }
} 

export  default useTopRatedMovies;  