import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../configurations/constants/authenticationValues";
import {
  setAuthToken,
  setRoles,
  setUser,
} from "../../../configurations/domain/redux/Authentication";
import { ApiService } from "../../../configurations/services/api/ApiService";
import Alert from "../../components/alert/Alert";
import Input from "../input/Input";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alert, setAlert] = React.useState(undefined);

  const handleFormSubmit = async (values) => {
    const { data, status, message } = await ApiService.auth.login(values);
    if (!status.toString().match(/^2/i)) {
      setAlert(message);
    } else {
      dispatch(setAuthToken(data.token));
      dispatch(setRoles(data.roles));
      dispatch(
        setUser({
          id: data.id,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
        })
      );
      navigate("/");
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <p>Welcome back! Enter your credentials.</p>
      {alert && <Alert message={alert} styleName="alert-danger" />}
      <div className="row">
        <Formik initialValues={login} onSubmit={handleFormSubmit}>
          {({ values, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                name="email"
                type="email"
                value={values.usernameOrEmail}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={values.password}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn auth-button"
              >
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
