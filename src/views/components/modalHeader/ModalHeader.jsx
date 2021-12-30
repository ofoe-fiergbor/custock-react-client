import React from "react";

const ModalHeader = ({ title = "title", desc = "description" }) => {
  return (
    <div className="row mb-4">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ModalHeader;
