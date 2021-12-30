import React from "react";

const ReceiveStock = ({ migrate }) => {
  return (
    <div>
      <h1 onClick={() => migrate()}>ReceiveStock</h1>
    </div>
  );
};

export default ReceiveStock;
