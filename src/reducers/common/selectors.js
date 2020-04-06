import NameSpace from "@reducers/name-space";
const NAME = NameSpace.COMMON;

const getFullScreenPlayerState = (state) => {
  return state[NAME].isFullscreenPlayerActive;
};

export {getFullScreenPlayerState};
