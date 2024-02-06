import { headerLinks } from "../../constants/links";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FormEvent, useState } from "react";

const Header = ({ isAuth }: Props) => {
  // current users state (logged in or not need to implemented later)
  const currentUser = true;
  const [searchTerm, setSearchTerm] = useState<string | "">("");
  const [toggleMobile, setToggleMobile] = useState<boolean>(false);

  // Handle search - pending waiting for API endpoint
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // searching needs to be implemented later
  };

  return (
    <>
      <header className="bg-slate-200 shadow-md sticky top-0 z-20 w-full px-5 h-[70px]">
        <div className="flex justify-between items-center max-w-[1520px] mx-auto p-3 gap-5 md:gap-10">
          <NavLink to="/" className={"w-1/2"}>
            <img className="w-[40px] h-[40px]" src={logo} alt="Logo" />
          </NavLink>

          {/* Search Form */}
          <form
            className="bg-slate-100 px-3 py-2 rounded-lg flex items-center w-full justify-between"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-44 lg:w-64 text-slate-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa-sharp fa-solid fa-magnifying-glass text-slate-400 cursor-pointer hover:text-slate-600"></i>
            </button>
          </form>

          {/* Categories links */}
          <ul className="hidden md:flex items-center justify-end gap-5 flex-grow w-full">
            {headerLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  to={link.link}
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-slate-700 text-[14px] uppercase font-semibold tracking-wider hidden sm:inline hover:text-black"
                      : "text-slate-500 text-[14px] uppercase tracking-wider font-semibold hidden sm:inline hover:text-black"
                  }
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex gap-6 tracking-wider items-center w-full justify-end">
            <li>
              <NavLink
                to="/cart"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px]  font-semibold hidden sm:inline hover:text-black"
                    : "text-slate-500 text-[16px]  font-semibold hidden sm:inline hover:text-black"
                }
              >
                <i className="fa-solid fa-cart-shopping "></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/wishlist"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px]  font-semibold hidden sm:inline hover:text-black"
                    : "text-slate-500 text-[16px] font-semibold hidden sm:inline hover:text-black"
                }
              >
                <i className="fa-solid fa-heart"></i>
              </NavLink>
            </li>
            <li>
              {isAuth ? (
                <NavLink to="/profile">
                  <img
                    className="rounded-full h-9 w-9 object-cover"
                    src={
                      "https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                    }
                    alt="User avatar"
                  />
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={(navClass) =>
                    navClass.isActive
                      ? "text-slate-700 text-14px sm:text-[16px] font-semibold hover:text-black"
                      : "text-slate-500 text-14px sm:text-[16px] font-semibold hover:text-black"
                  }
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>

          {/* For small devices */}
          {!toggleMobile ? (
            <i
              className="fa-solid fa-bars text-xl w-5 md:hidden"
              onClick={() => setToggleMobile((prev) => !prev)}
            ></i>
          ) : (
            <i
              className="fa-solid fa-xmark text-xl w-5"
              onClick={() => setToggleMobile((prev) => !prev)}
            ></i>
          )}
        </div>
      </header>

      {/* Small devices left nav bar */}
      <div
        className={`md:hidden fixed w-[80%] px-4 h-full py-4 bg-slate-200 rounded-md z-40 left-0 top-16 transition-all duration-700 ${
          toggleMobile ? "translate-x-[0px]" : "-translate-x-[100%]"
        }`}
      >
        <ul className="flex flex-col gap-6 tracking-wider px-10">
          {headerLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                to={link.link}
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[20px] font-semibold hover:underline"
                    : "text-slate-500 text-[20px] font-semibold hover:underline"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className={(navClass) =>
                navClass.isActive
                  ? "text-slate-700 text-[16px] font-semibold hover:underline"
                  : "text-slate-500 text-[16px] font-semibold hover:underline"
              }
            >
              {/* Hand burger menu for small devices */}
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={(navClass) =>
                navClass.isActive
                  ? "text-slate-700 text-[16px] font-semibold hover:underline"
                  : "text-slate-500 text-[16px] font-semibold hover:underline"
              }
            >
              Wishilist
            </NavLink>
          </li>
          <li>
            {currentUser ? (
              <NavLink
                to="/sign-in"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-[16px] font-semibold hover:underline"
                    : "text-slate-500 text-[16px] font-semibold hover:underline"
                }
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/sign-in"
                className={(navClass) =>
                  navClass.isActive
                    ? "text-slate-700 text-14px sm:text-[16px] font-semibold hover:underline"
                    : "text-slate-500 text-14px sm:text-[16px] font-semibold hover:underline"
                }
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

interface Props {
  isAuth: boolean;
}

export default Header;
