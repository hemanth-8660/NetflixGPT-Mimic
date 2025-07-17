import React, { useEffect } from "react"
import Header from "./Header";
import Logout from "./Logout";
import useNowPlaying from "../hooks/useNowplaying";
import MainVideo from "./MainVideo";
import SecondaryVideo from "./SecondaryVideo";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatesMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    useNowPlaying();
    usePopularMovies();
    useTopRatesMovies();
    useUpComingMovies();
    const searchView = useSelector(store => store.gpt.toggleSearchView);
    console.log('***********', searchView)
    return (
        <div>
            <Header />
            {
                searchView ? (<GptSearch />) : (
                    <>
                        <MainVideo />
                        <SecondaryVideo/>
                    </>
                )
            }
            
        </div>

        /*
            mainComponent
                - title 
                - description 
                - video bg
            secondaryComponent 
               - cards
        */
    )
};

export default Browse;
