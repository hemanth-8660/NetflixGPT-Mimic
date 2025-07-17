
import {createBrowserRouter} from "react-router-dom";
import {RouterProvider} from "react-router-dom";
import Login from "./Login";


import Browse from "./Browse";
const Body = () => {
 
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);
    // when user sisgnup / sign in pass those crredentials to the store
    //  check auth only when any changes in auth 
   
    
    // we have to put navigate in app, because we cant move to anywhere that much easily
    // otherwise put navigation in requried component like sign in etc
    return (
        <>
            <RouterProvider router = {appRouter}/>
        </>
    ); 
};

export default Body;
