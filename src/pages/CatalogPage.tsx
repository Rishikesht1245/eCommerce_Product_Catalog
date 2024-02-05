import { useCallback, useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import Input from "../componenets/form/Input";
import CheckBox from "../componenets/form/CheckBox";
import SelectInput from "../componenets/form/SelectInput";
import Button from "../componenets/UI/Button";
import { Link } from "react-router-dom";
import Loader from "../componenets/UI/Loader";
import ProductCard from "../componenets/UI/ProductCard";
import { Products } from "../interfaces/products";
import LoadingButton from "../componenets/UI/LoadingButton";
import { fetchProductsAPI } from "../api/products";

const CatalogPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Products[] | []>([]);
  const [listings, setListings] = useState<Products[] | []>([]);
  const [error, setError] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(true);

  // options for select input (useMemo memoise the result of a function)
  const sortOptions = useMemo(
    () => [
      { text: "Price high to low", value: "regularPrice_desc" },
      { text: "Price low to high", value: "regularPrice_asc" },
      { text: "Latest", value: "createdAt_desc" },
      { text: "Oldest", value: "createdAt_asc" },
    ],
    []
  );

  const initialValues = {
    searchTerm: "",
    all: true,
    men: false,
    women: false,
    kids: false,
    appliances: false,
    electronics: false,
    sort: "createdAt",
    order: "desc",
  };

  // Fetching Products - useCallback and useEffect is needed

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchProductsAPI();
      setProducts(data?.data);
      // for show more button
      setListings(data?.data?.slice(0, 9));
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setListings(products?.slice(0));
    setShowMore(false);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full">
      {/* left side section */}
      <div className="p-7 sm:border-r-2 md:min-h-screen md:w-1/4">
        <Formik
          initialValues={initialValues}
          onSubmit={(formData, { setSubmitting }) => {
            setSubmitting(true);
            console.log(formData);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6">
              <Input type="text" placeholder="Search Term" name="searchTerm" />
              <div className="flex gap-1 flex-wrap">
                <label className="text-sm font-bold ml-1 tracking-widest text-slate-700">
                  Type :
                </label>{" "}
                <CheckBox
                  name="all"
                  placeholder={"All Products"}
                  className={"flex items-center justify-between"}
                />
                <CheckBox
                  name="men"
                  placeholder={"Men"}
                  className={"flex items-center justify-between"}
                />
                <CheckBox
                  name="women"
                  placeholder={"Women"}
                  className={"flex items-center justify-between"}
                />
                <CheckBox
                  name="kids"
                  placeholder={"Kids"}
                  className={"flex items-center justify-between"}
                />
              </div>
              <div className="flex gap-1 flex-wrap">
                <label className="text-sm font-bold ml-1 tracking-widest text-slate-700">
                  Amenities :
                </label>{" "}
                <CheckBox
                  name="appliances"
                  placeholder={"Appliances"}
                  className={"flex items-center justify-between"}
                />
                <CheckBox
                  name="electronics"
                  placeholder={"Electronics"}
                  className={"flex items-center justify-between"}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <SelectInput
                  className={"flex items-center"}
                  label={"Sort"}
                  options={sortOptions}
                  name="sort"
                />
              </div>
              {isSubmitting ? (
                <LoadingButton />
              ) : (
                <Button type={"submit"}>Search</Button>
              )}
            </Form>
          )}
        </Formik>
      </div>
      {/* right side section */}
      <div className="p-2 md:flex-1 md:w-3/4">
        <h1 className="uppercase tracking-widest text-center text-xl sm:text-2xl font-semibold my-2 border-b-2 p-3">
          Products
        </h1>
        <div className="flex items-center justify-center mt-10">
          {loading && <Loader />}
          {error && (
            <div className="text-center flex gap-10 flex-col justify-center items-center h-[80vh]">
              <p className="text-2xl text-slate-700 text-bold">
                Something went wrong!
              </p>
              <Link to={"/"}>
                <Button type={"button"}>Back to Home</Button>
              </Link>
            </div>
          )}
          {!error && !loading && listings && listings.length === 0 && (
            <div className="text-center flex gap-10 flex-col justify-center items-center h-[80vh]">
              <p className="text-2xl text-slate-700 text-bold">
                No listing found!
              </p>
              <Link to={"/"}>
                <Button type={"button"}>Back to Home</Button>
              </Link>
            </div>
          )}
          {!loading && listings?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {listings.map((listing: Products) => (
                <ProductCard key={listing.id} product={listing} />
              ))}
            </div>
          )}
        </div>
        {showMore && (
          <div className="w-full flex justify-center">
            <Button
              type="button"
              className={"mt-10 md:max-w-[30%] w-full self-center"}
              onClick={handleShowMore}
            >
              Show more
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CatalogPage;
