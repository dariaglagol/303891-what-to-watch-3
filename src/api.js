import axios from "axios";
import {Error, TIMEOUT} from "@utils/constants";

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
        case Error.UNAUTHORIZED:
          onUnauthorized();
          break;
        case response.status >= Error.SERVER_PROBLEMS:
          onError(response);
          break;
      }
      throw err;
    } catch (exception) {
      throw err;
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
