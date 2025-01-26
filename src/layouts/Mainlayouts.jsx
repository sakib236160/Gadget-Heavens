import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { createContext, useState } from "react";
import { getAllProductsFromCart, getAllProductsFromWishlist } from "../utils";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

export const Context = createContext(null);

const Mainlayouts = () => {
  const [productsInCart, setProductsInCart] = useState(
    getAllProductsFromCart()
  );
  const [productsInWishlist, setProductsInWishlist] = useState(
    getAllProductsFromWishlist()
  );
  const updateState = () => {
    setProductsInCart(getAllProductsFromCart());
    setProductsInWishlist(getAllProductsFromWishlist());
  };
  return (
    <>
      <Context.Provider
        value={{ productsInCart, productsInWishlist, updateState }}
      >
        <Helmet>
          <title>Skb Gadget</title>
        </Helmet>
        <Toaster></Toaster>
        {/* Navbar */}
        {/* <Navbar></Navbar> */}
        <Header></Header>
        <div className="min-h-[calc(100vh-505px)] py-12">
          {/* Dymanik */}
          <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </Context.Provider>
    </>
  );
};

export default Mainlayouts;
