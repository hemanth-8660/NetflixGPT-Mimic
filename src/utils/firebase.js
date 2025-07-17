// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMwNUQ9EP3lPDMtIBfneMNUfysq-KgSE",
  authDomain: "netflixgpt-b7c05.firebaseapp.com",
  projectId: "netflixgpt-b7c05",
  storageBucket: "netflixgpt-b7c05.firebasestorage.app",
  messagingSenderId: "155862733001",
  appId: "1:155862733001:web:f2046e25f1d769582dbd18",
  measurementId: "G-VV3GH353NQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;