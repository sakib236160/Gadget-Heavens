import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";

const Dashboard = () => {
  return (
    <>
      <div>
        <Heading
          title="Control Panel "
          description="Manage your cart and wishlist effortlessly. Add, edit, or remove products from both. Track your total cost and payment status. Click the 'Cart' or 'Wishlist' button to view and update your items instantly."
        />
        <div className="flex items-center justify-center gap-6 bg-[#9538E2] pb-8">
          <NavLink
            to="/dashboard/cart"
            className={({ isActive }) =>
              `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${
                isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              `inline-block min-w-32 rounded-full border px-6 py-3 text-center ${
                isActive ? "bg-white font-bold text-[#9538E2]" : "text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
