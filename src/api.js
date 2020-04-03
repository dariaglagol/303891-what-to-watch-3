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
    const {response} = err;

    if (response && response.status === StatusCode.UNAUTHORIZED) {
      onUnauthorized();
      return;
    }

    onError(response || err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
