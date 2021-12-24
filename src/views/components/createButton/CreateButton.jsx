import React from "react";
import "./createButton.css";

const CreateButton = ({ handleClick }) => {
  return (
    <div
      data-bs-toggle="modal"
      data-bs-target="#createModal"
      className="create-btn"
    >
      <p>Create</p>
      <i className="bi bi-plus" />
    </div>
  );
};

export default CreateButton;

