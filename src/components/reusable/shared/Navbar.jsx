import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useUserLogoutMutation } from "../../../features/auth/AuthApi";
import logo from "../../../assets/jobhub-logo.svg";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import useDropDownPopupControl from "../../../hooks/dropDownPopupControl/useDropDownPopupControl";

const Navbar = () => {
  const { user } = useSelector((state) => state.userState);

  const [logout] = useUserLogoutMutation();

  const { isOpen, toggleMenu } = useDropDownPopupControl();

  const handleLogout = () => {
    logout();
  };

  const pathname = useLocation().pathname;

  return (
    <>
      <nav
        className={`${
          pathname === "/" && "fixed z-[100] top-0"
        } h-16 px-4  w-full   bg-white/65 `}
      >
        {/* horizontal menu  */}
        <ul className=" hidden  sm:flex max-container  gap-x-6 h-full items-center">
          <li className="flex-auto  font-semibold text-2xl">
            <Link to="/">
              <img src={logo} alt="Job-Box" />
            </Link>
          </li>

          <li>
            <Link className="hover:text-blue-600 text-[17px]" to="/jobs">
              Jobs
            </Link>
          </li>
          {user?.role && (
            <Link to={"/dashboard"} className="hover:text-blue-600 text-[17px]">
              Dashboard
            </Link>
          )}
          {!user?.role && user?.email && (
            <Link to={"/register"} className="hover:text-blue-600 text-[17px]">
              Get Started
            </Link>
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
              <Link
                className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                to="/login"
              >
                Login
              </Link>
            )}
          </li>
        </ul>
        {/* vertical menu  */}
        <ul className="  flex sm:hidden max-container  gap-x-6 h-full items-center relative ">
          <div
            className={`${
              isOpen
                ? "block absolute top-0 h-screen z-[10]  bg-black/50"
                : "hidden"
            } sm:hidden w-screen -ml-4 `}
          ></div>
          <li className="flex-auto  font-semibold text-2xl">
            <Link to="/">
              <img src={logo} alt="Job-Box" />
            </Link>
          </li>
          <li>
            <button onClick={toggleMenu}>
              <CiMenuFries />
            </button>
          </li>

          <div
            className={` ${
              isOpen ? "translate-x-0 " : "translate-x-full"
            }  fixed z-[10] top-0  h-full  transition-transform duration-700   border-none     flex  justify-end  w-full left-0`}
          >
            <div
              className={`w-[60%] relative  p-6 text-center  bg-white/85 h-full flex transition-transform duration-500 ease-out justify-evenly items-center flex-col `}
              dir="rtl"
            >
              <button
                className="bg-white rounded-sm hover:bg-red-400 h-fit top-0 p-1 absolute -left-[25px]  "
                onClick={toggleMenu}
              >
                <RxCross2 />
              </button>
              <li>
                <Link className="hover:text-blue-600 text-[17px]" to="/jobs">
                  Jobs
                </Link>
              </li>
              {user?.role && (
                <li>
                  <Link
                    to={"/dashboard"}
                    className="hover:text-blue-600 text-[17px]"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {!user?.role && user?.email && (
                <li>
                  <Link
                    to={"/register"}
                    className="hover:text-blue-600 text-[17px]"
                  >
                    Get Started
                  </Link>
                </li>
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
                  <Link
                    className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
                    to="/login"
                  >
                    Login
                  </Link>
                )}
              </li>
            </div>
          </div>
        </ul>
        {/* blur bg */}
      </nav>
    </>
  );
};

export default Navbar;
