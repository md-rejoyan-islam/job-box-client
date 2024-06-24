import { Link } from "react-router-dom";
import logo from "../../assets/jobhub-logo.svg";

function DashboardNavbar() {
  return (
    <header className=" border-b w-full px-4">
      <nav className="w-full">
        <ul className="flex h-16 justify-between gap-6 items-center w-full">
          <li className="flex-1">
            <Link to="/">
              <img src={logo} alt="Job-Box" />
            </Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
          <li>
            <label
              htmlFor="dashboard-drawer"
              aria-label="open sidebar"
              className="h-fit cursor-pointer lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default DashboardNavbar;
