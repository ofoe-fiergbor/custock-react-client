import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import {
  createInvoice,
  socialMedia,
} from "../../../configurations/constants/createMenu";
import { ApiService } from "../../../configurations/services/api/ApiService";
import Input from "../input/Input";
import ModalActionButtons from "../modalActionBtns/ModalActionButtons";
import ModalHeader from "../modalHeader/ModalHeader";

const NewSale = ({ migrate }) => {
  const { products } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.auth);

  const onSubmit = async(values) => {
    if (values.productId === null) {
      alert("Choose a product");
    }
    if (values.socialMedia === "") {
      alert("Choose a social media platform");
    }
    const temp = values.productId;
    values.productId = Number(temp);
    values.userId = user.id;

    const {data, status, message} = await ApiService.transaction.createInvoice(values)
    console.log({data, status, message} )
    if (!status.toString().match(/^2/i)) {
      alert(message)
    } else {
      migrate()
      alert("Invoice was created successfully.");
    }
  };
  return (
    <div className="container">
      <ModalHeader title="Sale invoice" desc="Recording dispatched stock." />
      <Formik initialValues={createInvoice} onSubmit={onSubmit}>
        {({ isSubmitting, handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <Input
              label="Description"
              placeholder="eg. Receipt of stock shipment to customer."
              name="description"
              value={values.description}
            />
            <Input
              label="Customer social media/name"
              placeholder="eg. @jack."
              name="buyer"
              value={values.buyer}
            />
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectGrid"
                onChange={handleChange}
                name="socialMedia"
                value={values.socialMedia}
              >
                <option>Open this to choose social media</option>
                {socialMedia.map((medial) => (
                  <option key={medial.value} value={medial.value}>
                    {medial.label}
                  </option>
                ))}
              </select>
              <label htmlFor="floatingSelectGrid">
                Choose a Social Media Platform
              </label>
            </div>

            <Input
              label="Order quantity"
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

export default NewSale;
