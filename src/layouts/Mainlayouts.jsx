import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import  { Toaster } from 'react-hot-toast';



const Mainlayouts = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/* Navbar */}
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-505px)] py-12">
                {/* Dymanik */}
                <Outlet></Outlet>
            </div> 
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;