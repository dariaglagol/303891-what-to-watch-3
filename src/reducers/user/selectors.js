import NameSpace from "@reducers/name-space";
const NAME = NameSpace.USER;

const getAuthStatus = (state) => {
  return state[NAME].authorizationStatus;
};

export {getAuthStatus};
