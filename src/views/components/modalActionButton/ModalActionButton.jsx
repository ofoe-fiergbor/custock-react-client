import React from "react";
import "./modalActionButton.css"

const ModalActionButton = ({ migrate, isSubmitting }) => {
  return (
    <div className="modalActionButton">
      <button
        onClick={() => migrate()}
        type="button"
        className="btn btn-secondary"
      >
        {"<<"}
      </button>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default ModalActionButton;
