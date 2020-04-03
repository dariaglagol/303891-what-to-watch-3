import NameSpace from "@reducers/name-space";
const NAME = NameSpace.USER;

const getAuthStatus = (state) => {
  return state[NAME].authorizationStatus;
};

const getUserData = (state) => {
  return state[NAME].userData;
};

const getSignInLoadingStatus = (state) => {
  return state[NAME].isLoading;
};

const getAuthFormSendingResult = (state) => {
  return state[NAME].commentFormSendingResult;
};

export {getAuthStatus, getUserData, getSignInLoadingStatus, getAuthFormSendingResult};
