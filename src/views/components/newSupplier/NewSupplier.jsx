import { Formik } from "formik";
import React from "react";
import { newSupplier } from "../../../configurations/constants/createMenu";
import ModalHeader from "../modalHeader/ModalHeader";
import Input from "../input/Input";
import { useSelector } from "react-redux";
import { ApiService } from "../../../configurations/services/api/ApiService";
import Toast from "../toast/Toast";

const NewSupplier = ({ migrate }) => {
  const {
    user: { id },
  } = useSelector((state) => state.auth);

  const onSubmit = async (values) => {
    values.userId = id;
    const { status, message } = await ApiService.suppliers.create(values);
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      migrate();
      alert("Supplier created successfully");
    }
  };
  return (
    <div className="container">
      <ModalHeader
        title="New Supplier"
        desc="A supplier is an individual or entity that supplies goods and services
          to you."
      />
      <Formik initialValues={newSupplier} onSubmit={onSubmit}>
        {({ values, isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Supplier Name"
              placeholder="John Doe"
              name="name"
              value={values.name}
            />
            <Input
              label="Supplier's Phone Number"
              placeholder="024 XXX XXXX"
              name="phoneNumber"
              value={values.phoneNumber}
            />
            <div className="flex">
              <button
                type="button"
                onClick={() => migrate()}
                className="btn btn-secondary"
              >
                Go Back
              </button>
              <button type="submit" className="btn btn-primary">
                {isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewSupplier;
