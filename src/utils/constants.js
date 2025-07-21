export const NETFLIX_BODY = "https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" 
export const NETFLIX_IMAGE = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const AVATAR = "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN = 'https://image.tmdb.org/t/p/w500';

export const langSelection = [
  {
    name: 'English',
    identifer: 'en'
  },
  {
    name: 'Hindi',
    identifer: 'hindi'
  },
  {
    name: 'Spanish',
    identifer: 'spanish'
  },
]

export const OpenAIApiKey = process.env.REACT_APP_OPENAI_KEY;
