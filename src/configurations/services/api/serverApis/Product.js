import Request from "../Request";

const Product = (() => {
  const resource = "/products";
  return {
    fetchAll: () => Request.get(`${resource}`),
    create: (body) => Request.post(`${resource}/create`, body),
    fetchOne: (productId) => Request.get(`${resource}/${productId}`),    
  };
})();

export default Product;
