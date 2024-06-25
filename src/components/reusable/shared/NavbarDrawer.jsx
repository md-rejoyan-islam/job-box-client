import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useUserLogoutMutation } from "../../../features/auth/AuthApi";

function NavbarDrawer() {
  const { user } = useSelector((state) => state.userState);

  const [logout] = useUserLogoutMutation();
  const handleLogout = () => {
    logout();
  };

  // drawer close on click
  const drawerCloseOnClick = () => {
    document.getElementById("nav-drawer").click();
  };
  return (
    <div className="drawer w-screen z-[1000] drawer-end">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side lg:hidden ">
        <label
          htmlFor="nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white/85 min-h-full w-[280px]  p-4 space-y-2 justify-between items-end">
          <div className="flex-1 flex  flex-col w-full h-full">
            <ul
              className="flex justify-center space-y-16 flex-col  flex-1
            "
            >
              <li>
                <NavLink
                  className="hover:text-blue-600  text-[17px]"
                  to="/"
                  onClick={drawerCloseOnClick}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:text-blue-600  text-[17px]"
                  to="/jobs"
                  onClick={drawerCloseOnClick}
                >
                  Jobs
                </NavLink>
              </li>
              {user?.role && (
                <li>
                  <NavLink
                    to={"/dashboard"}
                    className="hover:text-blue-600 text-[17px]"
                    onClick={drawerCloseOnClick}
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              {!user?.role && user?.email && (
                <li>
                  <NavLink
                    to={"/register"}
                    className="hover:text-blue-600 text-[17px]"
                    onClick={drawerCloseOnClick}
                  >
                    Get Started
                  </NavLink>
                </li>
              )}

              <li>
                {user ? (
                  <>
                    <span
                      href=""
                      className="hover:text-blue-600 text-[17px]"
                      onClick={() => {
                        handleLogout();
                        drawerCloseOnClick();
                      }}
                    >
                      Logout
                    </span>
                  </>
                ) : (
                  <NavLink
                    className="hover:text-blue-600 text-[17px]"
                    to="/login"
                    onClick={drawerCloseOnClick}
                  >
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavbarDrawer;
