import { useSelector } from "react-redux";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

function DashboardLayout() {
  const { user } = useSelector((state) => state.userState);

  // const candidateMenu = [
  //   { name: "Home", link: "#" },
  //   { name: "My Apply", link: "jobs" },
  //   { name: "My Jobs", link: "candidate/my-jobs" },
  // ];

  const { pathname } = useLocation();

  const Menus = () => (
    <>
      {user?.role === "employer" && (
        <>
          <li>
            <Link
              className={`${
                pathname === "/dashboard" && "active "
              }px-3 py-2  bg-primary/10 hover:bg-primary/20 `}
              to="/dashboard"
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink
              className="px-3 py-2  bg-primary/10 hover:bg-primary/20 "
              to="/dashboard/employer/add-job"
            >
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-3 py-2  bg-primary/10 hover:bg-primary/20 "
              to="/dashboard/employer/all-job"
            >
              All Job
            </NavLink>
          </li>
          <li>
            <NavLink
              className="px-3 py-2  bg-primary/10 hover:bg-primary/20 "
              to="/dashboard/employer/all-applicants"
            >
              Applicants
            </NavLink>
          </li>
        </>
      )}
      {user?.role === "candidate" && (
        <>
          <li>
            <Link
              className={`${
                pathname === "/dashboard" && "active "
              }px-3 py-2  bg-primary/10 hover:bg-primary/20 `}
              to="/dashboard"
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink
              className="px-3 py-2  bg-primary/10 hover:bg-primary/20 "
              to="/dashboard/candidate/my-jobs"
            >
              My Apply
            </NavLink>
          </li>
        </>
      )}

      <div className="flex-1 flex justify-end flex-col h-full">
        <li>
          <Link to="/" className="bg-green-100 px-2">
            <IoIosArrowBack /> Back
          </Link>
        </li>
      </div>
    </>
  );

  return (
    <div className="drawer w-screen dashboard-drawer ">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex lg:flex-row flex-col">
        {/* Navbar */}
        <div className="navbar p-0 min-h-fit lg:py-3 lg:px-1  m-0  items-start bg-[#f2f6fd] w-full lg:h-[calc(100vh-6px)] lg:min-w-[280px] lg:w-[280px]">
          <div className="flex-none lg:hidden h-fit"></div>
          <div className="hidden flex-none lg:block w-full h-full">
            <ul className="menu menu-horizontal flex flex-col gap-y-2 h-full">
              <Menus />
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="flex-1 w-full h-[calc(100vh-6px)] overflow-auto">
          <DashboardNavbar />
          <Outlet />
        </div>
      </div>
      <div className="drawer-side lg:hidden">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#f2f6fd] min-h-full w-[280px]  p-4 space-y-2 justify-between">
          {/* Sidebar content here */}
          <Menus />
        </ul>
      </div>
    </div>
  );
}

export default DashboardLayout;
