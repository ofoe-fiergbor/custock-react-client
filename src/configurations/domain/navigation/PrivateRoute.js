import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const { user } = useSelector((s) => s.auth);
  return user ? component : <Navigate to="/authentication" />;
};

export default PrivateRoute;
