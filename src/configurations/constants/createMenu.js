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

export const createInvoice = {
  description: "",
  buyer: "",
  socialMedia: "",
  quantity: undefined,
  productId: undefined,
  userId: undefined,
};

export const socialMedia = [
  { value: "TWITTER", label: "Twitter" },
  { value: "FACEBOOK", label: "Facebook" },
  { value: "INSTAGRAM", label: "Instagram" },
  { value: "WHATSAPP", label: "WhatsApp" },
  { value: "TIKTOK", label: "Tiktok" },
  { value: "OTHER", label: "Other" },
];
