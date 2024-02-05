import {
  footerLinksShop,
  footerLinksPolicy,
  footerLinksUtils,
} from "../../constants/links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/[0.8] text-gray-300 flex p-10 flex-wrap lg:justify-center lg:gap-[150px] gap-10 mt-10 w-full">
      <div className="flex flex-col">
        <h3 className="text-white m-1 font-bold">Online Shopping</h3>
        {footerLinksShop.map((item) => (
          <Link key={item.title} to={item.link} className="text-[14px] p-2">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white m-1 font-bold">Customer Policies</h3>
        {footerLinksPolicy.map((item) => (
          <Link key={item.title} to={item.link} className="text-[14px] p-2">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white m-1 font-bold">Useful Links</h3>
        {footerLinksUtils.map((item) => (
          <Link key={item.title} to={item.link} className="text-[14px] p-2">
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <h3 className="text-white m-1 font-bold">Social Media</h3>
        <div className="flex gap-5 m-1">
          <i className="fa-brands fa-facebook text-xl"></i>
          <i className="fa-brands fa-instagram text-xl"></i>
          <i className="fa-brands fa-youtube text-xl"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
