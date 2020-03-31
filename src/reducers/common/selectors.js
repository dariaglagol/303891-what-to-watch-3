import NameSpace from "@reducers/name-space";
const NAME = NameSpace.COMMON;

const getActivePage = (state) => {
  return state[NAME].activePage;
};

const getFullScreenPlayerState = (state) => {
  return state[NAME].isFullscreenPlayerActive;
};

export {getActivePage, getFullScreenPlayerState};
