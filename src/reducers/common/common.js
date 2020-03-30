import {PageTypes} from "@utils/constants";
import {extend} from "@utils/utils";

const initialState = {
  activePage: PageTypes.LOADING,
  isFullscreenPlayerActive: false,
};

const ActionType = {
  SET_ACTIVE_PAGE: `SET_ACTIVE_PAGE`,
  TOGGLE_FULLSCREEN_PLAYER: `TOGGLE_FULLSCREEN_PLAYER`,
};

const ActionCreator = {
  setActivePage: (page) => {
    return {
      type: ActionType.SET_ACTIVE_PAGE,
      payload: page
    };
  },
  toggleFullscreenPlayer: (state) => {
    return {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: state,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PAGE:
      return extend(state, {activePage: action.payload});
    case ActionType.TOGGLE_FULLSCREEN_PLAYER:
      return extend(state, {isFullscreenPlayerActive: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
