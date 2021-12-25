export const createMenu = [
  { id: 1, label: "Receive new stock items" },
  { id: 2, label: "Issue invoice for stock items" },
  { id: 3, label: "Create new customer" },
  { id: 4, label: "Create new supplier" },
  { id: 5, label: "Create new product" },
];

export const createNewCustomer = {
  name: "",
  phoneNumber: "",
  socialMedia: "",
  socialMediaHandle: "",
};

export const createNewSupplier = {
  name: "",
  phoneNumber: "",
  email: "",
  address: "",
};

export const createNewProduct = {
  name: "",
  description: "",
  unitMeasurement: "",
  supplierId: undefined,
};
