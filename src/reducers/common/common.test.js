import {reducer, ActionCreator, ActionType} from "./common";
import {getFullScreenPlayerState} from "./selectors";

const initialState = {
  activePage: `loading`,
  isFullscreenPlayerActive: false,
};

const state = {
  COMMON: {
    activePage: `main`,
    isFullscreenPlayerActive: false
  }
};

describe(`Common reducer tests`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should toggle fullscreen player`, () => {
    const {isFullscreenPlayerActive} = initialState;

    expect(reducer({
      isFullscreenPlayerActive
    }, {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    })).toEqual({
      isFullscreenPlayerActive: true,
    });
  });

  it(`Action creator return correct value after toggle fullscreen player`, () => {
    expect(ActionCreator.toggleFullscreenPlayer(true)).toEqual({
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    });
  });

  it(`Selector getFullScreenPlayerState return right key`, () => {
    expect(getFullScreenPlayerState(state)).toEqual(false);
  });
});
