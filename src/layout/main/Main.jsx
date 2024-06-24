import { Outlet } from "react-router-dom";
import Navbar from "../../components/reusable/shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4  max-container ">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
