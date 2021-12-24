import React from "react";

const NewStock = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate(0)}>NewStock</h1>
    </div>
  );
};

export default NewStock;
