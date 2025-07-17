import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addUser, removeUser} from "../utils/userSlice";
import { useEffect } from "react";
import {onAuthStateChanged} from "firebase/auth";
import auth from "../utils/firebase";
import { AVATAR,langSelection,NETFLIX_IMAGE } from "../utils/constants";
import Logout from "./Logout";
import { toggleSearch } from "../utils/gptSlice";
import { chooseLanguage } from "../utils/langSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const searchView = useSelector(store => store.gpt.toggleSearchView);
   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // send only required data to store othwesie stcak exceeds
              dispatch(addUser({
                      uid: user.uid,
                      email: user.email,
                      displayName: user.displayName
              }));
              navigate('/browse');
              
          } else {
              dispatch(removeUser());
              navigate('/')
          }
        })
        return () => unsubscribe();
    }, []);

  
    function toggleSearchButton() {
      console.log('searchView',searchView)
      dispatch(toggleSearch());
    }

    function handleLanguage(e) {
      console.log('e00000000000', e)
      dispatch(chooseLanguage(e.target.value))
    }
  return (
    <div className="absolute w-screen bg-gradient-to-b from-black z-10 opacity-80 flex justify-between">
        <img className="w-44 px-4 " 
          src= {`${NETFLIX_IMAGE}`}
          alt="logo"
        />

        {
          searchView &&
          <select className="border bg-blue-400 p-2 my-4 mr-16 justify-end" onChange={handleLanguage}>
            {
              langSelection.map(l => (
                <option key={l.identifer} value={l.identifer}>{l.name}</option>
              ))
            }
          </select>  
        }

        <button className="px-4 py-1 mr-28 my-5 rounded-lg bg-purple-800 text-white" onClick={toggleSearchButton}>
          {searchView ? 'GPT': 'Homepage'}
        </button>
        
        {
          user && <Logout />
        }
        
        
    </div>
    
  )
};

export default Header;
