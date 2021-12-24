import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ component }) => {
  // const userType = localStorage.getItem("userType")

  const { user } = useSelector((state) => state.auth);

  return user ? component : <Navigate to="/authentication" />;
};

export default PrivateRoute;
