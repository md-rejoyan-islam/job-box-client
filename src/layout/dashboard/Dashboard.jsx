import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <div className="py-6 px-6">
      <h1 className="text-5xl font-bold text-center">
        Welcome to JobBox Dashboard
      </h1>
      <p className="text-center text-lg py-3">
        {user?.role === "employer"
          ? "You are an employer"
          : "You are a candidate"}
      </p>
    </div>
  );
};

export default Dashboard;
