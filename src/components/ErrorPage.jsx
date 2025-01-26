import { useRouteError } from "react-router-dom";
import errorImg  from '../assets/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center">
        <img src={errorImg} alt="" />
      </div>
    );
};

export default ErrorPage;