import React, { useState, useRef } from "react"
import Header from './Header';
import {Validate} from './Validate';
import auth from '../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AVATAR,NETFLIX_BODY,NETFLIX_URL } from "../utils/constants";

const Login = () => {
    const dispatch = useDispatch();
    const [signInStatus, setSignInStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const handleToggle = () => {
        setSignInStatus(!signInStatus);
    }

    const handleClick = (e) => {
        const res = Validate(email.current.value, password.current.value);
        setErrorMessage(res);
        if (res) return;    // if any validation failes

        // sign up
        if (!signInStatus) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then(userCredential => {
                const user = userCredential.user;

                console.log('Succesfully sign up' + user);
            }).catch (error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        } else {
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value).then(userCredential => {
                const user = userCredential.user;
                console.log('Successfully logged in...' + JSON.stringify(auth));
                updateProfile(auth, {
                    displayName: user.email,
                    photoURL: AVATAR
                }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch({
                        email,
                        uid,
                        displayName,
                        photoURL 
                    })
                }).catch (error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
            }).catch(error => {
                 const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    }

    return (
        <div>
        <Header/>
        <img className="absolute" src={`${NETFLIX_BODY}`} alt="netflix-logo"/>
            <form className="w-3/12 absolute bg-black p-5 h-400px w-400px my-40 mx-auto right-0 left-0 opacity-80 text-white justify-center items-center" onClick={(e)=> e.preventDefault()}>
                <h1 className="text-center font-bold text-3xl" >{signInStatus ? 'Sign In' : 'Sign Up'}</h1>
                {!signInStatus && <input type="text" placeholder="username" className="m-4 p-3 w-fit bg-gray-700 0"/>}                
                <input type="email" ref={email} placeholder="Email" className="m-4 p-3 w-fit bg-gray-700 relative"/>
                <input type="password" ref={password} placeholder="password" className="m-4 p-3 w-fit bg-gray-700 relative"/>
                <button className="m-4 p-2 w-fit bg-red-600" onClick={handleClick}>{signInStatus ? 'Sign In' : 'Sign Up'}</button>
                
                {errorMessage && <p className="text-red-600 font-bold p-2 m-4">{errorMessage}</p>}
                <p className="font-bold text-sm m-4 p-2 cursor-pointer" onClick={handleToggle}>
                    {signInStatus ? 'New to Netflix? SignUp' : 'Already User? SignIn'}
                </p>
            </form>
        </div>
    )
};

export default Login;
