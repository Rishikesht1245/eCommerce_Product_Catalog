import { Outlet } from "react-router-dom";
import Header from "../componenets/layout/Header";
import Footer from "../componenets/layout/Footer";

const UserLayout = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default UserLayout;
