import Request from "../Request";

const Transactions = () => {
  const resource = "/transactions";

  return {
    fetchAll: (params) => Request.get(`${resource}`, params),
    fetchOne: (params, id) => Request.get(`${resource}/${id}`, params),
    createInward: (body) => Request.post(`${resource}/in`, body),
    createOutward: (body) => Request.post(`${resource}/out`, body),
  };
};

export default Transactions;
