import React from "react";

const NewCustomer = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate(-3)}>NewCustomer</h1>
    </div>
  );
};

export default NewCustomer;
