import Request from "../Request";

const Suppliers = (() => {
  const resource = "/suppliers";
  return {
    create: (body) => Request.post(`${resource}/supplier`, body),
    fetchAll: () => Request.get(`${resource}`),
  };
})();

export default Suppliers;
