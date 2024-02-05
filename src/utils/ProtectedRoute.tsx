import { Outlet } from "react-router-dom";
import useAuthData from "../customHooks/useAuthData";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [auth] = useAuthData();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
