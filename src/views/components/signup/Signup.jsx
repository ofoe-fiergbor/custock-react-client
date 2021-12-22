import React from "react";
import { Formik } from "formik";
import { signup } from "../../../configurations/constants/authenticationValues";
import Input from "../input/Input";
import "./signup.css";

import { ApiService } from "../../../configurations/services/api/ApiService";

/**
 *
 * firstname
 * lastname
 * username
 * email
 * password
 */

const Signup = () => {

  const handleFormSubmit = async (values) => {
    const response = await ApiService.auth.register(values);
    console.log(response);
  };
  return (
    <div className="container">
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

/**
 * <form>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
 */
