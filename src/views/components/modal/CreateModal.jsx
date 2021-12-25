import React from "react";
import "./createModal.css";
import { createMenu } from "../../../configurations/constants/createMenu";
import NewStock from "../newStock/NewStock"
import NewInvoice from "../newInvoice/NewInvoice"
import NewCustomer from "../newCustomer/NewCustomer"
import NewSupplier from "../newSupplier/NewSupplier"


const CreateModal = () => {
  const [localStage, setLocalStage] = React.useState(0);

  const actions = ["menu", "stock", "invoice", "customer", "supplier"]

  const swap = (delta) => {
    if (localStage + 1 < actions.length) {
      const _stage = localStage + delta;
      setLocalStage(_stage);
    } else {
      setLocalStage(0);
    }
  };
  const home = () => setLocalStage(0)

  return (
    <div
      tabIndex="-1"
      id="createModal"
      className="modal fade"
      aria-hidden="true"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      aria-labelledby="createModalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            {actions[localStage] === "menu" && (
              <>
                {createMenu.map((item) => (
                  <div onClick={() => swap(item.id)} className="modal-menu-item-ctn" key={item.id}>
                    <div>{item.label}</div>
                    <i className="bi bi-chevron-right"></i>
                  </div>
                ))}
              </>
            )}
            {actions[localStage] === "stock" && <NewStock migrate={home} />}
            {actions[localStage] === "invoice" && <NewInvoice migrate={home} />}
            {actions[localStage] === "customer" && <NewCustomer migrate={home} />}
            {actions[localStage] === "supplier" && <NewSupplier migrate={home} />}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-secondary"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
