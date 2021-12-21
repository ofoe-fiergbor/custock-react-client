import axios from "axios";
import { apiConstants } from "../../constants/ApiContansts";

const Request = (() => {
  const { baseURL, requestMethod } = apiConstants;

  const request = (method, resource, body) => {
    const config = {
      baseURL: baseURL,
      url: `/${resource}`,
      withCredentials: false,
      method: method,
    };
    if (method === requestMethod.GET && body) config.params = body;
    else if (body) config.data = body;
    return axios(Object.freeze(config));
  };

  return {
    baseUrl: baseURL,
    delete: async (resource) => Response(request(requestMethod.DELETE, resource)),
    put: async (resource, body) => Response(request(requestMethod.PUT, resource, body)),
    post: async (resource, params) => Response(request(requestMethod.POST, resource, params)),
    patch: async (resource, body) => Response(request(requestMethod.PATCH, resource, body)),
  };
})();

export default Request;
