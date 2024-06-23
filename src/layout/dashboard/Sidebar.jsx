import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { user } = useSelector((state) => state.userState);

  const employerMenu = [
    { name: "Add Job", link: "add-job" },

    { name: "Applicants", link: "applicants" },
    { name: "Profile", link: "profile" },
  ];
  const candidateMenu = [
    { name: "Jobs", link: "jobs" },
    { name: "My Jobs", link: "candidate/my-jobs" },
    { name: "Profile", link: "profile" },
  ];

  return (
    <div className="bg-primary/10 col-span-2 h-screen sticky top-0">
      <ul className="flex flex-col gap-2 w-full h-full  p-3">
        <div className="flex justify-between items-center text-primary my-1">
          <Link to="/" className="flex items-center">
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className="text-xl">Dashboard</h1>
        </div>
        {user?.role === "employer" &&
          employerMenu.map((menu, index) => (
            <li key={index} className="p-3 bg-primary/20 rounded-md">
              <Link to={`/dashboard/${menu.link}`}>{menu.name}</Link>
            </li>
          ))}
        {user?.role === "candidate" &&
          candidateMenu.map((menu, index) => (
            <li key={index} className="p-3 bg-primary/20 rounded-md">
              <Link to={`/dashboard/${menu.link}`}>{menu.name}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
