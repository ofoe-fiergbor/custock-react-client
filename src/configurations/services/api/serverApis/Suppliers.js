import Request from "../Request";

const Suppliers = (() => {
  const resource = "/suppliers";
  return {
    createSupplier: (body) => Request.post(`${resource}/supplier`, body),
  };
})();

export default Suppliers;
