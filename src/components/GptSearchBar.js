import React from "react"
import lang from "../utils/lang";
import { useSelector } from "react-redux";


const GptSearchBar = () => {

  const language = useSelector(store => store.lang.language);
  return (
    <div className="pt-[20%] w-full justify-center"> 
      <form className="bg-black w-1/2 grid grid-cols-12 -my-20 mx-52" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder={lang[language].placeHolder} className="border border-black p-4 col-span-9"/>
        <button className="bg-red-600 text-white  p-4 col-span-3">{lang[language].search}</button>
      </form>
    </div>
  )
  
};

export default GptSearchBar;
