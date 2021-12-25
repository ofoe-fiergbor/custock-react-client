import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import ModalActionButton from "../modalActionButton/ModalActionButton";
import { createNewCustomer } from "../../../configurations/constants/createMenu";


const NewCustomer = ({ migrate }) => {
  const handleCreateNewCustomer = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
    <div className="row">
      <h2 className="text-center">Create New Customer</h2>
    </div>
      <div className="row">
        <Formik
          initialValues={createNewCustomer}
          onSubmit={handleCreateNewCustomer}
        >
          {({ values, isSubmitting, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input label="Name" name="name" value={values.name} />
              <Input
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
              />
              <Input
                name="socialMedia"
                value={values.socialMedia}
                label="Social Media Platform"
              />
              <Input
                name="socialMediaHandle"
                label="Social Media Handle"
                value={values.socialMediaHandle}
              />
              <ModalActionButton isSubmitting={isSubmitting} migrate={migrate} />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewCustomer;

/* <h1 onClick={() => migrate()}>NewCustomer</h1> */
