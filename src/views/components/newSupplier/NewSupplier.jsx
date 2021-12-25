import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import ModalActionButton from "../modalActionButton/ModalActionButton";
import { createNewSupplier } from "../../../configurations/constants/createMenu";

const NewSupplier = ({ migrate }) => {
  const handleCreateNewSupplier = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Create New Customer</h2>
      </div>
      <div className="row">
        <Formik
          initialValues={createNewSupplier}
          onSubmit={handleCreateNewSupplier}
        >
          {({ values, isSubmitting, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input label="Name" name="name" value={values.name} />
              <Input
                name="phoneNumber"
                label="Phone Number"
                value={values.phoneNumber}
              />
              <Input name="email" value={values.email} label="Email" />
              <Input name="address" label="Address" value={values.address} />
              <ModalActionButton
                isSubmitting={isSubmitting}
                migrate={migrate}
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewSupplier;
