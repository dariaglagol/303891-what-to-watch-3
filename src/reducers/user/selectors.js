import NameSpace from "@reducers/name-space";
const NAME = NameSpace.USER;

const getAuthStatus = (state) => {
  return state[NAME].authorizationStatus;
};

const getUserData = (state) => {
  return state[NAME].userData;
};

const getUserError = (state) => {
  return state[NAME].error;
};

export {getAuthStatus, getUserData, getUserError};
