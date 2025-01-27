import { NavLink, useRouteError } from "react-router-dom";
import errorImg  from '../assets/error.png'
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    const error = useRouteError();
    return (
      
        <div className="flex h-screen w-full flex-col items-center justify-center">
           <Helmet>
      <title>Error</title>
    </Helmet> 
        <img src={errorImg} alt="" />
        <NavLink
          to="/"
          className="px-6 py-3 mt-4 bg-[#9538E2] text-white font-bold rounded-full hover:bg-[#a856eb] transition"
        >
          Back to Home
        </NavLink>
      </div>
    );
};

export default ErrorPage;