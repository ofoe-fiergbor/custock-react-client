import Request from "../Request";

const Items = (() => {
  const resource = "/items";
  return {
    fetchAll: (params) => Request.get(`${resource}`, params),
    fetchOne: (params, itemId) => Request.get(`${resource}/${itemId}`, params),
    create: (body) => Request.post(`${resource}`, body),
    update: (body) => Request.put(`${resource}`, body),
  };
})();

export default Items;
