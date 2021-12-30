import "./signup.css";
import React from "react";
import { Formik } from "formik";
import Input from "../input/Input";
import Alert from "../../components/alert/Alert";
import { ApiService } from "../../../configurations/services/api/ApiService";
import { signup } from "../../../configurations/constants/authenticationValues";

const Signup = ({ login }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [alert, setAlert] = React.useState("");

  const handleFormSubmit = async (values) => {
    const { status, message } = await ApiService.auth.register(values);
    if (!status.toString().match(/^2/i)) {
      setAlert(message);
      setShowAlert(true);
    } else {
      login(true);
    }
  };
  return (
    <div className="container">
      {showAlert && <Alert message={alert} styleName="alert-danger" />}
      <h2>Sign up</h2>
      <p>Create account to start using CuStock.</p>
      <div className="row">
        <Formik initialValues={signup} onSubmit={handleFormSubmit}>
          {({ values, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Input
                label="First Name"
                name="firstName"
                value={values.firstName}
              />
              <Input
                label="Last Name"
                name="lastName"
                value={values.lastName}
              />
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

export default Signup;
