import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addNowPlaying} from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const useNowPlaying = () => {
    const dispatch = useDispatch();
    const now_playing = useSelector(store => store.movies.nowPlayingMovies);
    useEffect(() => {
        !now_playing && fetchData();
    }, [])

    async function fetchData() {
        let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        res = await res.json();
        dispatch(addNowPlaying(res))
    }
} 

export  default useNowPlaying;