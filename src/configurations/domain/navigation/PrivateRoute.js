import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const userType = localStorage.getItem("userType")
  return userType ? component : <Navigate to="/authentication" />;
};

export default PrivateRoute;
