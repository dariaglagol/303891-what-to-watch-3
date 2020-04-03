import NameSpace from "@reducers/name-space";

const NAME = NameSpace.ERR0R;

const getError = (state) => {
  return state[NAME].error;
};

export {getError};
