import {reducer, ActionType, ActionCreator} from "./user";
import {AuthorizationStatus} from "@utils/constants";
import {getAuthStatus, getUserData, getUserError} from "./selectors";

const userData = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `avatarUrl`
};

const error = {
  error: `error`,
};

const givenAuthorizationStatus = `NO_AUTH`;

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  error: {},
};

const state = {
  USER: {
    userData: {
      id: 1,
      email: `email`,
      name: `name`,
      avatarUrl: `avatarUrl`
    },
    error,
    authorizationStatus: givenAuthorizationStatus
  }
};

const userDataWithFullAvatarUrl = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `https://htmlacademy-react-3.appspot.comavatarUrl`
};

describe(`User reducer test`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should set user data`, () => {
    expect(reducer(initialState.userData, {
      type: ActionType.SET_USER_DATA,
      payload: userData
    }
    )).toEqual({
      userData
    });
  });

  it(`Reducer should set user error`, () => {
    expect(reducer(initialState.error, {
      type: ActionType.SET_ERROR,
      payload: error
    }
    )).toEqual({error});
  });

  it(`Reducer should toggle authorization status`, () => {
    const {authorizationStatus} = initialState;

    expect(reducer(
        {authorizationStatus}, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: `NO_AUTH`
        })).toEqual({
      authorizationStatus: `NO_AUTH`
    });
  });

  it(`Action creator return correct action after checking status`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    });
  });

  it(`Action creator return correct action after set user info`, () => {
    expect(ActionCreator.setUserData(userData)).toEqual({
      type: ActionType.SET_USER_DATA,
      payload: userDataWithFullAvatarUrl,
    });
  });

  it(`Action creator return correct action after users error`, () => {
    expect(ActionCreator.setError(error)).toEqual({
      type: ActionType.SET_ERROR,
      payload: error,
    });
  });

  it(`Selector getUserError return right key`, () => {
    expect(getUserError(state)).toEqual(error);
  });

  it(`Selector getAuthStatus return right key`, () => {
    expect(getAuthStatus(state)).toEqual(givenAuthorizationStatus);
  });

  it(`Selector getUserData return right key`, () => {
    expect(getUserData(state)).toEqual(userData);
  });
});
