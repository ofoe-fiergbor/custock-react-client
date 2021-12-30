import Request from "../Request";

const Authentication = (() => {
  const resource = "/auth";
  return {
    register: (body) => Request.post(`${resource}/signup`, body),
    login: (body) => Request.post(`${resource}/login`, body),
    logout: () => Request.get(`${resource}/logout`),
  };
})();

export default Authentication;
