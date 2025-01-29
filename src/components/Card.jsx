import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="rounded-xl bg-white p-4 shadow-2xl">
      <figure className="mb-4">
        <img src={product.image} className="rounded-lg w-full h-64 " />
      </figure>
      <div className="">
        <h2 className="mb-2 text-xl font-bold">{product.title}</h2>
        <p className="mb-4">Price: ${product.price}</p>
        <NavLink
           to={`/product/${product.id}`}
           className="inline-block rounded-full border-2 border-[#9538E2] px-6 py-3 font-bold text-[#9538E2]"
         >
           View Details
         </NavLink>
      </div>
    </div>
  );
};

export default Card;
