import React from "react";

const NewProduct = ({ migrate }) => {
  return (
    <div className="container">
      <h1 onClick={() => migrate()}>new produce</h1>
    </div>
  );
};

export default NewProduct;
