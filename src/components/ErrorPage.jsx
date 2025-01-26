import { useRouteError } from "react-router-dom";
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
      </div>
    );
};

export default ErrorPage;