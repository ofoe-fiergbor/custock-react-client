export const createMenu = [
  { id: 1, label: "Receive stock items" },
  { id: 2, label: "New sale invoice" },
  { id: 3, label: "New supplier" },
  { id: 4, label: "New product" },
];

export const newSupplier = {
  name: "",
  phoneNumber: "",
  userId: undefined,
};

export const createNewProduct = {
  name: "",
  unitOfMeasurement: "",
  supplierId: undefined,
  userId: undefined,
};

export const createReceipt = {
  description: "",
  quantity: undefined,
  supplierId: undefined,
  productId: undefined,
  userId: undefined,
};
