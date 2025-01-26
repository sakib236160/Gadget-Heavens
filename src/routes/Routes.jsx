import {createBrowserRouter} from "react-router-dom";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Support from "../pages/Support";
import ProductCards from "../components/ProductCards";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayouts></Mainlayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: () => fetch("../data/categories.json"),
          children: [
            {
              path: "/",
              element: <ProductCards />,
              loader: () => fetch("../data/products.json"),
            },
            {
              path: "/category/:category",
              element: <ProductCards />,
              loader: () => fetch("../data/products.json"),
            },
          ],
        },
        {
          path:"/statistics",
          loader: () => fetch("../data/products.json"),
          element: <Statistics></Statistics>,
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: "/dashboard/cart",
              element: <Cart></Cart>
            },
            {
              path: "/dashboard/wishlist",
              element: <Wishlist></Wishlist>
            },
          ],
        },
        {
          path:"/support",
          element: <Support></Support>
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
          loader: () => fetch("../data/products.json"),
        },
      ]
    },
  ]);

export default routes;