import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.userState);

  if (!user) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
