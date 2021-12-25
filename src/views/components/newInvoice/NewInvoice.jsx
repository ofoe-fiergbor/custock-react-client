import React from "react";

const NewInvoice = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate(-2)}>NewInvoice</h1>
    </div>
  );
};

export default NewInvoice;
