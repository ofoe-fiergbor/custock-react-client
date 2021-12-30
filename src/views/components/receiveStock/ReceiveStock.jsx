import { Formik } from "formik";
import React from "react";
import ModalHeader from "../modalHeader/ModalHeader";
import { createReceipt } from "../../../configurations/constants/createMenu";
import Input from "../input/Input";
import { useSelector } from "react-redux";
import ModalActionButtons from "../modalActionBtns/ModalActionButtons";
import { ApiService } from "../../../configurations/services/api/ApiService";

const ReceiveStock = ({ migrate }) => {
  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const getSupplier = (values) => {
    let result;
    products.forEach((element) => {
      if (values?.productId === element.id.toString()) {
        result = element.supplier.id;
      }
    });
    return result;
  };

  const onSubmit = async (values) => {
    if (values.productId == null) {
      alert("Kindly choose a supplier");
      return;
    }

    values.supplierId = getSupplier(values);

    const temp = values.productId;
    values.productId = Number(temp);

    values.userId = user.id;

    const { message, status } = await ApiService.transaction.createReceipt(
      values
    );
    if (!status.toString().match(/^2/i)) {
      alert(message);
    } else {
      migrate();
      alert("Receipt was created successfully.");
    }
  };

  return (
    <div className="container">
      <ModalHeader
        title="Receive new stock"
        desc="This is for recording all stock you received."
      />
      <Formik initialValues={createReceipt} onSubmit={onSubmit}>
        {({ isSubmitting, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Description"
              placeholder="eg. Receipt of stock shipment from Milo Ltd."
              name="description"
              value={values.description}
            />
            <Input
              label="Quantity"
              placeholder="Quantity received"
              name="quantity"
              type="number"
              value={values.quantity}
            />
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                aria-label="Floating label select example"
                onChange={handleChange}
                name="productId"
                required
                value={values.productId}
              >
                <option>Open this to select a product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelectGrid">Choose a product</label>
            </div>
            <ModalActionButtons migrate={migrate} isSubmitting={isSubmitting} />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ReceiveStock;
