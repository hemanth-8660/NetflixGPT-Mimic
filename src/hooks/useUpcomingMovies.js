import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addUpcomingMovies} from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useUpComingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let res = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        res = await res.json();
        dispatch(addUpcomingMovies(res))
    }
} 

export default useUpComingMovies;  