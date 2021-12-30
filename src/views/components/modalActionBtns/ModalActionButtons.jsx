import React from "react";

const ModalActionButtons = ({ migrate, isSubmitting = false }) => {
  return (
    <div className="flex mt-2">
      <button
        type="button"
        onClick={() => migrate()}
        className="btn btn-secondary"
      >
        Go Back
      </button>
      <button type="submit" className="btn btn-primary">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </div>
  );
};

export default ModalActionButtons;
