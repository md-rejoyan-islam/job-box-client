import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/reusable/Loading";
import { useIsLoggedInQuery } from "../features/auth/AuthApi";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.userState);

  if (!user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
