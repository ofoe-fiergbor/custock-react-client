import axios from "axios";
import Response from "./Response";
import CustockRedux from "../../domain/redux/CustockRedux";
import { apiConstants } from "../../constants/ApiContansts";

const Request = (() => {
  const { requestMethod } = apiConstants;
  const baseURL = "http://localhost:8080/api/v1";

  const getHeaders = () => {
    const { authToken } = CustockRedux.getStore("auth");
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    return headers;
  };

  const request = (method, resource, body) => {
    const config = {
      baseURL,
      url: resource,
      headers: getHeaders(),
      withCredentials: false,
      method: method.toLowerCase(),
    };
    // console.log(config, body)
    if (method === requestMethod.GET && body) config.params = body;
    else if (body) config.data = body;
    return axios(Object.freeze(config));
  };

  return {
    baseUrl: baseURL,
    delete: async (resource) =>
      Response(request(requestMethod.DELETE, resource)),
    put: async (resource, body) =>
      Response(request(requestMethod.PUT, resource, body)),
    post: async (resource, params) =>
      Response(request(requestMethod.POST, resource, params)),
    patch: async (resource, body) =>
      Response(request(requestMethod.PATCH, resource, body)),
    get: async (resource, params) =>
      Response(request(requestMethod.GET, resource, params)),
  };
})();

export default Request;
