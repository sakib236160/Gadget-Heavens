import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
// import Banner from "./Banner";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`${
        isHomePage
          ? "mx-4 mt-6 rounded-t-xl bg-[#9538E2] text-white"
          : "mx-4 mt-6"
      } md:mx-5 lg:mx-6`}
    >
      <Navbar />
      {/* {isHomePage && <Banner />} */}
    </header>
  );
};

export default Header;
