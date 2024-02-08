import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchSingleProduct } from "../store/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import ReviewSlider from "../componenets/UI/ReviewSlider";
import { reviews } from "../constants/dummy";
import { CartProduct, ProductState, Products } from "../interfaces/products";
import Loader from "../componenets/UI/Loader";
import Button from "../componenets/UI/Button";
import { cartActions } from "../store/cartSlice";
import toast from "react-hot-toast";
import { getLocalData } from "../utils/localStorage";

const SingleProductPage = () => {
  const params: { id?: string } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getLocalData();

  //   dispatching the action to fetch the products
  useEffect(() => {
    dispatch(fetchSingleProduct(+params?.id!));
  }, [dispatch, params?.id]);

  //   accessing the product data from store
  const { product: currentProduct, loading }: ProductState = useSelector(
    (state: RootState) => state.singleProduct
  );

  const productsInCart: CartProduct[] = useSelector(
    (state: RootState) => state.cart.products
  );

  // adding product to cart
  const handleAddCart = (currentProduct: Products) => {
    if (auth) {
      // If product already exists in cart
      const productExist = productsInCart?.findIndex(
        (product) => product?.id === currentProduct?.id
      );
      if (productExist >= 0) {
        dispatch(cartActions.increaseQuantity(currentProduct?.id));
        toast.success("Product quantity increased");
      } else {
        dispatch(cartActions.addProduct({ ...currentProduct!, quantity: 1 }));
        toast.success("Product added successfully");
      }
    } else {
      navigate("/login");
    }
  };

  const handleAddReview = () => {
    if (auth) {
      // implement function to add review
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col w-full">
      {loading ? (
        <Loader />
      ) : (
        // {/* Product details section  */}
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-6 gap-4 h-full mt-10 pb-10 bg-gray-100 p-4 max-w-[1100px] mx-auto">
            <div className="h-full md:col-span-2 xl:col-span-3">
              {/* images selection  */}
              <div className="flex items-center justify-center xl:justify-between gap-1 xs:gap-10">
                {/* Side images */}
                <div className="flex flex-col gap-2 md:max-w-[1/5] sm:max-w-[1/3]">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={`image${index}`}
                      className="border border-slate-200 rounded-sm p-1 hover:border-primary"
                    >
                      <img
                        className="w-24 h-24 object-contain"
                        src={currentProduct?.image}
                        alt={currentProduct?.image}
                      />
                    </div>
                  ))}
                </div>
                {/* side images ends here */}
                {/* Main image */}
                <div className="h-full lg:h-[500px]">
                  <img
                    className="w-full h-full object-contain"
                    src={currentProduct?.image}
                    alt="Product image"
                  />
                </div>
              </div>
              {/* images */}
            </div>

            {/* Product details section */}
            <div
              className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center
      "
            >
              <div className="flex flex-col gap-5">
                <h2 className="text-lg md:text-4xl xs:text-xl font-semibold">
                  {currentProduct?.title}
                </h2>
                <div className="flex justify-start items-center gap-3">
                  <p className="text-green-500 text-xl font-semibold mt-2 flex items-center">
                    ₹{currentProduct?.price! - 5}
                  </p>
                  <p className="text-red-500 line-through text-md font-semibold mt-2 flex items-center">
                    ₹ {currentProduct?.price}
                  </p>
                  <p className="text-gray-400 text-sm font-semibold mt-2 flex items-center italic">
                    {5} % Offer
                  </p>
                </div>
                <p className="text-base text-gray-600">
                  {currentProduct?.description}
                </p>
                <div className="flex flex-col gap-2">
                  <p className="font-normal text-sm">
                    <span className="text-gray-600 font-medium"> Color :</span>{" "}
                    Green
                  </p>
                  <p className="font-normal text-sm">
                    <span className="text-gray-600 font-medium">
                      {" "}
                      Category :
                    </span>{" "}
                    {`${currentProduct?.category}`}
                  </p>
                </div>
                <Button
                  type="button"
                  onClick={() => handleAddCart(currentProduct!)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Review Section*/}
          <div className="flex flex-col p-4 mt-8 sm:mt-10 gap-5 w-full md:px-10">
            <h2 className="text-xl font-semibold text-center">Reviews</h2>
            <ReviewSlider reviews={reviews} />
            <button
              onClick={handleAddReview}
              className="cursor-pointer mt-5 font-semibold hover:text-primary text-gray-600 text-center"
            >
              Add Review <span className="hover:translate-x-1">⟶</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default SingleProductPage;
