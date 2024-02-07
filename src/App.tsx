import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import Loader from "./componenets/UI/Loader";
import UserLayout from "./layouts/UserLayout";
import SingleProductPage from "./pages/SingleProductPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  const CatalogPage = lazy(() => import("./pages/CatalogPage"));
  const CartPage = lazy(() => import("./pages/CartPage"));
  const SignInPage = lazy(() => import("./pages/SignInPage"));

  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Loader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<Loader />}>
                <CatalogPage />
              </Suspense>
            }
          />
          <Route
            path="/products/:id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleProductPage />
              </Suspense>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/cart"
              element={
                <Suspense fallback={<Loader />}>
                  <CartPage />
                </Suspense>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
