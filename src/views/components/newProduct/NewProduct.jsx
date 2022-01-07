import React from "react";
import ModalHeader from "../modalHeader/ModalHeader";
import { Formik } from "formik";
import { createNewProduct } from "../../../configurations/constants/createMenu";
import Input from "../input/Input";
import { useSelector, useDispatch } from "react-redux";
import ModalActionButtons from "../modalActionBtns/ModalActionButtons";
import { ApiService } from "../../../configurations/services/api/ApiService";
import { updateProducts } from "../../../configurations/domain/redux/Product";

const NewProduct = ({ migrate }) => {
  const { suppliers } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    if (values.supplierId == null) {
      alert("Kindly choose a supplier");
      return;
    }
    values.userId = user.id;
    const { status, message, data } = await ApiService.product.create(values);
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      migrate();
      dispatch(updateProducts(data));
      alert("Product created successfully");
    }
  };

  return (
    <div className="container">
      <ModalHeader
        title="New Product"
        desc="This is for recording the kind or products you trade."
      />
      <Formik initialValues={createNewProduct} onSubmit={onSubmit}>
        {({ isSubmitting, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Product name"
              placeholder="eg. Smartphone case"
              name="name"
              value={values.name}
            />
            <Input
              label="Unit of measurement"
              placeholder="eg. kg, unit, bag"
              name="unitOfMeasurement"
              value={values.unitOfMeasurement}
            />
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleChange}
                name="supplierId"
                required
                value={values.supplierId}
              >
                <option>Open this to select a supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id}>
                    {supplier.name}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelectGrid">Choose a supplier</label>
            </div>
            <ModalActionButtons migrate={migrate} isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewProduct;
