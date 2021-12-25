import React from "react";
import { Formik } from "formik";
import { createNewProduct } from "../../../configurations/constants/createMenu";
import Input from "../input/Input";
import ModalActionButton from "../modalActionButton/ModalActionButton";

/**
 * 
 *  private String name;
    private String description;
    private String unitMeasurement;
    private Integer supplierId;
 */
const NewProduct = ({ migrate }) => {
  const handleNewProduct = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center">Create New Customer</h2>
      </div>
      <div className="row">
        <Formik initialValues={createNewProduct} onSubmit={handleNewProduct}>
          {({ values, isSubmitting, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Input label="Name" name="name" value={values.name} />
              <Input
                name="description"
                label="Product Description"
                value={values.description}
              />
              <Input
                name="unitMeasurement"
                value={values.unitMeasurement}
                label="Unit of Measurement"
              />
              <Input
                name="supplierId"
                label="Supplier"
                value={values.supplierId}
              />
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

export default NewProduct;
