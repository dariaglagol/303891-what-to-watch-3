import {extend} from "@utils/utils";

const initialState = {
  isFullscreenPlayerActive: false,
};

const ActionType = {
  TOGGLE_FULLSCREEN_PLAYER: `TOGGLE_FULLSCREEN_PLAYER`,
};

const ActionCreator = {
  toggleFullscreenPlayer: (state) => {
    return {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: state,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_FULLSCREEN_PLAYER:
      return extend(state, {isFullscreenPlayerActive: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
