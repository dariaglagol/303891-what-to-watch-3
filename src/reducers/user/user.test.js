import {reducer, ActionType, ActionCreator} from "./user";
import {AuthorizationStatus} from "@utils/constants";

const InitialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

describe(`User reducer test`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(InitialState);
  });

  it(`Reducer should toggle authorization status`, () => {
    const {authorizationStatus} = InitialState;

    expect(reducer({
      authorizationStatus
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true
    })).toEqual({
      authorizationStatus: true,
    });
  });

  it(`Action creator return correct action after checking status`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    });
  });
});
