import { Outlet } from "react-router-dom";
import Navbar from "../components/reusable/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="px-4 max-container">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
