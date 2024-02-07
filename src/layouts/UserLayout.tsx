import { Outlet } from "react-router-dom";
import Header from "../componenets/layout/Header";
import Footer from "../componenets/layout/Footer";
import useAuthData from "../customHooks/useAuthData";

const UserLayout = () => {
  const [_, setAuthData] = useAuthData();

  const isAuth = JSON.parse(localStorage.getItem("auth")!);
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Header isAuth={isAuth} setAuth={setAuthData} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default UserLayout;
