import {PageTypes} from "@utils/constants";
import {extend} from "@utils/utils";

const InitialState = {
  activePage: PageTypes.MAIN,
  isFullscreenPlayerActive: false,
};

const ActionType = {
  GET_ACTIVE_PAGE: `GET_ACTIVE_PAGE`,
  TOGGLE_FULLSCREEN_PLAYER: `TOGGLE_FULLSCREEN_PLAYER`,
};

const ActionCreator = {
  getActivePage: (page) => {
    return {
      type: ActionType.GET_ACTIVE_PAGE,
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

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_PAGE:
      return extend(state, {activePage: action.payload});
    case ActionType.TOGGLE_FULLSCREEN_PLAYER:
      return extend(state, {isFullscreenPlayerActive: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
