import {signOut} from "firebase/auth";
import auth from "../utils/firebase"
import {useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    function handleLogout () { 
        try {
            signOut(auth).then(() => {
                console.log('Successfully logged out!!!!');
                navigate('/');
            }).catch(err => {
                
            });
            
        } catch (err) {
             console.error("Logout failed:", err);
        }      
    }
  return (
      <div className="absolute right-0 top-0 z-50 p-4">
        <button
            className="px-4 py-2 text-sm text-white bg-slate-500 rounded cursor-pointer"
            onClick={handleLogout}
        >
            Logout
        </button>
    </div>
  )
};

export default Logout;
