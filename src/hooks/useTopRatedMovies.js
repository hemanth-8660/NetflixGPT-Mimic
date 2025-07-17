import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addTopRatedMovies} from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let res = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        res = await res.json();
        console.log('&&&&&&&&&&', res);
        dispatch(addTopRatedMovies(res))
    }
} 

export  default useTopRatedMovies;  