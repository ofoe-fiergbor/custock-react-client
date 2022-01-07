import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ component }) => {

  const { authToken } = useSelector((state) => state.auth);

  return authToken ? component : <Navigate to="/authentication" />;
};

export default PrivateRoute;
