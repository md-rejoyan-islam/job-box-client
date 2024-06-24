import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PublicRoute = ({ children }) => {
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const { user } = useSelector((state) => state.userState);

  if (user) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
