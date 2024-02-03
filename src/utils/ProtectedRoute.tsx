import { Outlet } from "react-router-dom";
import useAuthData from "../customHooks/useAuthData";

const ProtectedRoute = () => {
  const [auth] = useAuthData();

  auth ? <Outlet /> : null;
};
export default ProtectedRoute;
