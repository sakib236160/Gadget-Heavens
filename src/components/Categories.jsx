import { NavLink } from "react-router-dom";


const Categories = ({categories}) => {
    return (
  
        <div className="space-y-4">
      <NavLink
        className={({ isActive }) =>
          `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`
        }
        to="/"
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category.id}
          className={({ isActive }) =>
            `block w-full rounded-full border px-6 py-3 ${isActive ? "bg-[#9538E2] font-bold text-white" : "bg-gray-100"}`
          }
          to={`/category/${category.category}`}
        >
          {category.category}
        </NavLink>
      ))}
    </div>
    );
};

export default Categories;