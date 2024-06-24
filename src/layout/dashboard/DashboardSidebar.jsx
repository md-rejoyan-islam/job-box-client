import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import { IoIosArrowBack } from "react-icons/io";

function DashboardSidebar() {
  const { user } = useSelector((state) => state.userState);
  const employerMenu = [
    { name: "Home", link: "" },
    { name: "Add Job", link: "add-job" },
    { name: "Applicants", link: "applicants" },
    { name: "Profile", link: "profile" },
  ];
  const candidateMenu = [
    { name: "Home", link: "" },
    { name: "Jobs", link: "jobs" },
    { name: "My Jobs", link: "candidate/my-jobs" },
    { name: "Profile", link: "profile" },
  ];

  return (
    <div className="drawer w-screen ">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex lg:flex-row flex-col">
        {/* Navbar */}
        <div className="navbar p-0 min-h-fit lg:py-3 lg:px-1  m-0  items-start bg-[#f2f6fd] w-full lg:h-[calc(100vh-6px)] lg:min-w-[280px] lg:w-[280px]">
          <div className="flex-none lg:hidden h-fit"></div>
          {/* <div className="mx-2 flex-1 px-2">Navbar Title</div> */}
          <div className="hidden flex-none lg:block w-full h-full">
            <ul className="menu menu-horizontal flex flex-col gap-y-2 h-full">
              {/* Navbar menu content here */}
              {user?.role === "employer" &&
                employerMenu.map((menu, index) => (
                  <li key={index} className="  bg-[#e0e9ff] rounded-md ">
                    <Link className="px-3 py-2" to={`/dashboard/${menu.link}`}>
                      {menu.name}
                    </Link>
                  </li>
                ))}
              {user?.role === "candidate" &&
                candidateMenu.map((menu, index) => (
                  <li key={index} className=" bg-primary/20 rounded-md ">
                    <Link className="px-3 py-2" to={`/dashboard/${menu.link}`}>
                      {menu.name}
                    </Link>
                  </li>
                ))}
              <div className="flex-1 flex justify-end flex-col h-full">
                <li>
                  <Link to="/" className="bg-red-200 px-2">
                    <IoIosArrowBack /> Back
                  </Link>
                </li>
              </div>
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
          {user?.role === "employer" &&
            employerMenu.map((menu, index) => (
              <li key={index} className="  bg-[#e0e9ff] rounded-md ">
                <Link className="px-3 py-2" to={`/dashboard/${menu.link}`}>
                  {menu.name}
                </Link>
              </li>
            ))}
          {user?.role === "candidate" &&
            candidateMenu.map((menu, index) => (
              <li key={index} className=" bg-primary/20 rounded-md ">
                <Link className="px-3 py-2" to={`/dashboard/${menu.link}`}>
                  {menu.name}
                </Link>
              </li>
            ))}

          <div className="flex-1 flex justify-end flex-col h-full">
            <li>
              <Link to="/" className="bg-red-200 px-2">
                <IoIosArrowBack /> Back
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DashboardSidebar;
