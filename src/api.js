import axios from "axios";
import {StatusCode, TIMEOUT} from "@utils/constants";

export const createAPI = (onUnauthorized, onError) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    try {
      const {response} = err;
      switch (response.status) {
        case StatusCode.UNAUTHORIZED:
          onUnauthorized();
          break;
        case StatusCode.SERVER_PROBLEMS:
          onError(response);
          break;
        case StatusCode.AUTH_ERROR:
          return response;
        default:
          break;
      }
    } catch (exception) {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
