import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useUserLogoutMutation } from "../../../features/auth/AuthApi";
import logo from "../../../assets/jobhub-logo.svg";
import NavbarDrawer from "./NavbarDrawer";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const { user } = useSelector((state) => state.userState);

  const [logout] = useUserLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  const pathname = useLocation().pathname;

  return (
    <>
      <nav
        className={`${
          pathname === "/" && "fixed z-[100] top-0"
        } h-16 px-4  w-full border-b menu-bar   bg-white/65 `}
      >
        {/* horizontal menu  */}
        <ul className=" flex max-container  gap-x-6 h-full items-center">
          <li className="flex-auto  font-semibold text-2xl">
            <Link to="/">
              <img src={logo} alt="Job-Box" />
            </Link>
          </li>

          <div className=" items-center gap-x-6 sm:flex hidden">
            <li>
              <NavLink className="hover:text-blue-600 text-[17px]" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-blue-600 text-[17px]" to="/jobs">
                Jobs
              </NavLink>
            </li>
            {user?.role && (
              <NavLink
                to={"/dashboard"}
                className="hover:text-blue-600 text-[17px]"
              >
                Dashboard
              </NavLink>
            )}
            {!user?.role && user?.email && (
              <NavLink
                to={"/register"}
                className="hover:text-blue-600 text-[17px]"
              >
                Get Started
              </NavLink>
            )}

            <li>
              {user ? (
                <>
                  <button
                    className="bg-blue-500 text-[17px] py-[6px] px-3 rounded-md text-white"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  className="bg-blue-500 text-[17px] py-[6px] px-3 rounded-md text-white "
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </div>
          <li className="sm:hidden">
            <label
              htmlFor="nav-drawer"
              aria-label="open sidebar"
              className="h-fit cursor-pointer lg:hidden"
            >
              <CiMenuFries />
            </label>
          </li>
        </ul>
      </nav>

      {/* navbar drawer */}
      <NavbarDrawer />
    </>
  );
};

export default Navbar;
