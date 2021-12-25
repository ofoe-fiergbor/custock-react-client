import React from "react";

const NewInvoice = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate()}>NewInvoice</h1>
    </div>
  );
};

export default NewInvoice;
