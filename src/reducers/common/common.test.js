import {reducer, ActionCreator, ActionType} from "./common";
import {getActivePage, getFullScreenPlayerState} from "./selectors";

const InitialState = {
  activePage: `main`,
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
    expect(reducer(void 0, {})).toEqual(InitialState);
  });

  it(`Reducer should change current page list by a given value`, () => {
    const {activePage} = InitialState;

    expect(reducer({
      activePage
    }, {
      type: ActionType.GET_ACTIVE_PAGE,
      payload: `movie`
    })).toEqual({
      activePage: `movie`
    });
  });

  it(`Reducer should toggle fullscreen player`, () => {
    const {isFullscreenPlayerActive} = InitialState;

    expect(reducer({
      isFullscreenPlayerActive
    }, {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    })).toEqual({
      isFullscreenPlayerActive: true,
    });
  });

  it(`Action creator return correct page after change`, () => {
    expect(ActionCreator.getActivePage(`movie`)).toEqual({
      type: ActionType.GET_ACTIVE_PAGE,
      payload: `movie`,
    });
  });

  it(`Action creator return correct value after toggle fullscreen player`, () => {
    expect(ActionCreator.toggleFullscreenPlayer(true)).toEqual({
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    });
  });

  it(`Selector getActivePage return right key`, () => {
    expect(getActivePage(state)).toEqual(`main`);
  });

  it(`Selector getFullScreenPlayerState return right key`, () => {
    expect(getFullScreenPlayerState(state)).toEqual(false);
  });
});