import Request from "../Request";

const Transaction = (() => {
  const resource = "/transaction";
  const receiptResource = `${resource}/receipts`;
  const invoiceResource = `${resource}/invoices`;

  return {
    fetchAllInvoices: () => Request.get(`${invoiceResource}`),
    fetchAllReceipts: () => Request.get(`${receiptResource}`),
    createReceipt: (body) => Request.post(`${receiptResource}/create`, body),
    createInvoice: (body) => Request.post(`${invoiceResource}/create`, body),
    fetchReceipt: (receiptId) => Request.get(`${receiptResource}/${receiptId}`),
    fetchInvoice: (invoiceId) => Request.get(`${invoiceResource}/${invoiceId}`),
  };
})();

export default Transaction;
