import Request from "../Request";

const Supplier = (() => {
  const resource = "/suppliers";
  return {
    fetchAll: () => Request.get(`${resource}`),
    create: (body) => Request.post(`${resource}/create`, body),
    fetchOne:(supplierId) => Request.get(`${resource}/${supplierId}`)
  };
})();

export default Supplier;
