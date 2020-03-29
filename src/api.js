import axios from "axios";
import {Error, TIMEOUT} from "@utils/constants";

export const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    switch (response.status) {
      case Error.UNAUTHORIZED:
        onUnauthorized();
        throw err;
      case Error.SERVER_PROBLEMS:
        throw new Error(`${response.status}: ${response.statusText}`);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
