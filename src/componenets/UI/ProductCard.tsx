import { Link } from "react-router-dom";
import { Products } from "../../interfaces/products";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div className="md:mx-auto bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:max-w-[270px]">
      <Link className="flex flex-col gap-4" to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-contain hover:scale-105 transition-scale duration-300"
        />

        <div className="p-4 flex flex-col gap-2 w-full tracking-wide">
          <p className="text-lg font-semibold text-slate-700 truncate">
            {product.title}
          </p>
          <p className="text-sm text-gray-600 line-clamp-2 text-semibold">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-green-600 font-semibold w-full">
              ₹ {product.price}
            </p>
            <p className="w-full text-end">
              {product.rating?.rate}{" "}
              <i className="fa-solid fa-star text-[#D4AF37]"></i>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
