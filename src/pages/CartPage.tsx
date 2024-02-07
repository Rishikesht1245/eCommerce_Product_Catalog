import { useDispatch, useSelector } from "react-redux";
import { CartProduct } from "../interfaces/products";
import { RootState } from "../store/store";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../store/cartSlice";
import Button from "../componenets/UI/Button";

const CartPage = () => {
  const cartProducts: CartProduct[] = useSelector(
    (state: RootState) => state.cart.products
  );

  const totalCoast = Math.round(
    cartProducts?.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return cartProducts?.length === 0 ? (
    <div className="h-full flex flex-col gap-10">
      <h5>Your cart is empty</h5>
      <Button type="button" onClick={() => navigate("/products")}>
        View Products
      </Button>
    </div>
  ) : (
    <>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 shadow-md my-5 w-full">
          <div className="bg-white px-10 py-5 col-span-1 sm:col-span-2">
            <div className="flex justify-between border-b pb-4">
              <h1 className="font-semibold text-gray-600 text-2xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-2xl text-gray-600">
                {cartProducts.length}{" "}
                {cartProducts?.length > 1 ? "Items" : "Item"}
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {/* Render cart products dynamically */}
            {cartProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              >
                {/* Product Image */}
                <div className="flex w-2/5">
                  <div className="w-24">
                    <img
                      className="h-14 w-14 sm:h-24 sm:w-full"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold sm:text-sm text-[12px]">
                      {product.title}
                    </span>
                    <span className="text-red-500 text-xs">
                      {product.category}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(cartActions.removeProduct(product?.id))
                      }
                      className="font-semibold text-left hover:text-red-500 text-gray-500 text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                {/* Product Quantity */}
                <div className="flex justify-center w-1/5">
                  {/* Implement quantity control */}
                  {/* Decrease button */}
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() =>
                      dispatch(cartActions?.decreaseQuantity(product?.id))
                    }
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    className="mx-2 text-center w-8 outline-none border-none"
                    type="text"
                    value={product.quantity}
                    readOnly
                  />
                  {/* Increase button */}
                  <svg
                    className="fill-current text-gray-600 w-3 cursor-pointer"
                    viewBox="0 0 448 512"
                    onClick={() =>
                      dispatch(cartActions?.increaseQuantity(product?.id))
                    }
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {product.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  {Math.round(product.price * product.quantity)}
                </span>
              </div>
            ))}
            {/* Continue Shopping */}
            <Link
              to={"/products"}
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          {/* Order Summary */}
          <div id="summary" className="px-8 py-5 col-span-1">
            <h1 className="font-semibold text-gray-600 text-2xl border-b pb-4">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm">
                Items : {cartProducts.length}
              </span>
              <span className="font-semibold text-sm">{totalCoast}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>{totalCoast}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
