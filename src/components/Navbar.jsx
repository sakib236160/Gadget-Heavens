import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-2">
      <div className="navbar mx-auto w-11/12 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost pl-0 lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/statistics">Statistics</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          <a className="text-lg font-bold sm:text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/statistics">Statistics</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* Cart Icon */}
          <button className="btn btn-circle bg-white shadow-none" aria-label="View cart">
            <div className="indicator">
              <img src="/assets/cart.svg" alt="Cart" className="h-5 w-5" />
              <span className="badge indicator-item badge-sm">0</span>
            </div>
          </button>
          {/* Wishlist Icon */}
          <button className="btn btn-circle bg-white shadow-none" aria-label="View wishlist">
            <div className="indicator">
              <img src="/assets/heart.svg" alt="Wishlist" className="h-5 w-5" />
              <span className="badge indicator-item badge-sm">0</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;