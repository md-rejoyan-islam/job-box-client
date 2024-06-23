// import { signOut } from "firebase/auth";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useUserLogoutMutation } from "../../features/auth/AuthApi";

const Navbar = () => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.userState);

  const [logout] = useUserLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${
        pathname === "/" ? null : "bg-white"
      }`}
    >
      <ul className="max-w-7xl mx-auto flex gap-3 h-full items-center">
        <li className="flex-auto font-semibold text-2xl">
          <Link to="/">JobBox</Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/jobs">
            Jobs
          </Link>
        </li>
        {user?.role && (
          <Link
            to={"/dashboard"}
            className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
          >
            Dashboard
          </Link>
        )}
        {!user?.role && user?.email && (
          <Link
            to={"/register"}
            className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
          >
            Get Started
          </Link>
        )}

        <li>
          {user ? (
            <>
              <button
                className="border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all "
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
    </nav>
  );
};

export default Navbar;
