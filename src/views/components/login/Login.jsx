import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import { login } from "../../../configurations/constants/authenticationValues";
import "./login.css"

const Login = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
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
                value={values.email}
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
