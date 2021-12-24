import React from "react";
import "./createModal.css";
import { createMenu } from "../../../configurations/constants/createMenu";
import Action from "../action/Action";
import ActionSubmission from "../actionSubmission/ActionSubmission";
import NewStock from "../newStock/NewStock"
import NewInvoice from "../newInvoice/NewInvoice"
import NewCustomer from "../newCustomer/NewCustomer"
import NewSupplier from "../newSupplier/NewSupplier"


const CreateModal = () => {
  const [localStage, setLocalStage] = React.useState(0);

  const stages = ["menu", "form", "submission"];
  const actions = ["menu", "stock", "invoice", "customer", "supplier"]

  const swap = (delta) => {
    if (localStage + 1 < stages.length) {
      const _stage = localStage + delta;

      setLocalStage(_stage);
    } else {
      setLocalStage(0);
    }
  };
  return (
    <div
      tabIndex="-1"
      id="createModal"
      class="modal fade"
      aria-hidden="true"
      data-bs-keyboard="false"
      data-bs-backdrop="static"
      aria-labelledby="createModalLabel"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            {actions[localStage] === "menu" && (
              <>
                {createMenu.map((item) => (
                  <div onClick={() => swap(item.id)} className="modal-menu-item-ctn" key={item.id}>
                    <div>{item.label}</div>
                    <i class="bi bi-chevron-right"></i>
                  </div>
                ))}
              </>
            )}
            {actions[localStage] === "stock" && <NewStock migrate={swap} />}
            {actions[localStage] === "invoice" && <NewInvoice migrate={swap} />}
            {actions[localStage] === "customer" && <NewCustomer migrate={swap} />}
            {actions[localStage] === "supplier" && <NewSupplier migrate={swap} />}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-secondary"
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
