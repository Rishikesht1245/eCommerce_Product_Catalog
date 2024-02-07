import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = JSON.parse(localStorage.getItem("auth")!);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
