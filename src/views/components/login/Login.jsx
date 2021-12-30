import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import { login } from "../../../configurations/constants/authenticationValues";
import { useDispatch } from "react-redux";
import {
  setUser,
  setUserType,
} from "../../../configurations/domain/redux/Authentication";
import { ApiService } from "../../../configurations/services/api/ApiService";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    const { data } = await ApiService.auth.login(values);
    if (data) {
      dispatch(setUser(data));
      dispatch(setUserType(data.role.name));
      navigate("/");
    }
  };
  return (
    <div className="container">
      <h2>Login</h2>
      <p>Welcome back! Enter your credentials.</p>
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
