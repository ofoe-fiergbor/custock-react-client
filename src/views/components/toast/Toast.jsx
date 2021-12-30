import React from "react";

const Toast = ({ message = "message", title = "title" }) => {
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-header">
        <strong className="me-auto">{title}</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default Toast;
