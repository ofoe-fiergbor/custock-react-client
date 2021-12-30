import React from "react";

const NewSale = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate()}>NewSale</h1>
    </div>
  );
};

export default NewSale;
