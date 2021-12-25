import axios from "axios";
import { apiConstants } from "../../constants/ApiContansts";
import Response from "./Response";

const Request = (() => {
  const { requestMethod } = apiConstants;
  const baseURL = "http://localhost:8080/api/v1";

  const request = (method, resource, body) => {
    const config = {
      baseURL,
      url: resource,
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
    delete: async (resource) => Response(request(requestMethod.DELETE, resource)),
    put: async (resource, body) => Response(request(requestMethod.PUT, resource, body)),
    post: async (resource, params) =>Response(request(requestMethod.POST, resource, params)),
    patch: async (resource, body) =>Response(request(requestMethod.PATCH, resource, body)),
    get: async (resource, params) => Response(request(requestMethod.GET, resource, params)),

  };
})();

export default Request;
