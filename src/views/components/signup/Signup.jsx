import React from "react";
import { Formik } from "formik";
import { signup } from "../../../configurations/constants/authenticationValues";
import Input from "../input/Input";
import "./signup.css";
import { ApiService } from "../../../configurations/services/api/ApiService";
import Alert from "../../components/alert/Alert";
/**
 *
 * firstname
 * lastname
 * username
 * email
 * password
 */

const Signup = ({ login }) => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleFormSubmit = async (values) => {
    const response = await ApiService.auth.register(values);
    if (!response.status.toString().match(/^2/i)) {
      setMessage(response.meassage);
      setShowAlert(true);
      setSuccess(false);
    } else {
      setMessage(response.data);
      setShowAlert(true);
      setSuccess(true);
      login(true);
    }
  };
  return (
    <div className="container">
      {showAlert && (
        <Alert
          message={message}
          styleName={`${success ? "alert-primary" : "alert-danger"}`}
        />
      )}
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
              <Input label="Username" name="username" value={values.username} />
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
