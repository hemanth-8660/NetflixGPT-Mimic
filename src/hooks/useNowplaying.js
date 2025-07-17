import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import {addNowPlaying} from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useNowPlaying = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        let res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        res = await res.json();
        dispatch(addNowPlaying(res))
    }
} 

export  default useNowPlaying;