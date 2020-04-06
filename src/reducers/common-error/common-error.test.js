import {reducer, ActionCreator, ActionType} from "./common-error";
import {getError} from "./selectors";

const initialState = {
  error: {},
};

const comingError = {
  error: {
    data: {
      error: `error,`
    }
  }
};

const state = {
  ERR0R: {
    error: {
      data: {
        error: `error`
      }
    }
  }
};

describe(`Common error reducer tests`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should set error message`, () => {
    const {error} = initialState;

    expect(reducer({
      error
    }, {
      type: ActionType.SET_ERROR,
      payload: comingError
    })).toEqual({
      error: comingError
    });
  });

  it(`Action creator return correct value after setting error object`, () => {
    expect(ActionCreator.setError(comingError)).toEqual({
      type: ActionType.SET_ERROR,
      payload: comingError
    });
  });

  it(`Selector getFullScreenPlayerState return right key`, () => {
    expect(getError(state)).toEqual({data: {error: `error`}});
  });
});
