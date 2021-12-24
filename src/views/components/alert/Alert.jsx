import React from "react";

const Alert = ({ message="placeholder", styleName = "alert-primary" }) => {
  return (
    <div className={`alert ${styleName}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
