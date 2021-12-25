import Request from "../Request";

const Items = (() => {
  const resource = "/items";
  return {
    fetchAll: () => Request.get(`${resource}`),
    fetchOne: (params, itemId) => Request.get(`${resource}/${itemId}`, params),
    create: (body) => Request.post(`${resource}`, body),
    update: (body) => Request.put(`${resource}`, body),
  };
})();

export default Items;
