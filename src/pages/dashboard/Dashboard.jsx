import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <div className="py-20 px-4">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center">
        Welcome to <span className="text-[#5e81ff]">JobBox</span> Dashboard
      </h1>
      <p className="text-center text-lg py-3 font-semibold">
        {user?.role === "employer"
          ? "You are an Employer"
          : "You are a Candidate"}
      </p>
    </div>
  );
};

export default Dashboard;
