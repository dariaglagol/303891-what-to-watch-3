import {reducer, ActionType, ActionCreator} from "./user";
import {AuthorizationStatus} from "@utils/constants";
import {getAuthStatus, getUserData, getSignInLoadingStatus, getAuthFormSendingResult} from "./selectors";

const userData = {
  id: 1,
  email: `email`,
  name: `name`,
  avatarUrl: `avatarUrl`
};

const givenAuthorizationStatus = `NO_AUTH`;

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  authSendingResult: null,
  isLoading: false
};

const state = {
  USER: {
    userData: {
      id: 1,
      email: `email`,
      name: `name`,
      avatarUrl: `avatarUrl`
    },
    authorizationStatus: givenAuthorizationStatus,
    authSendingResult: null,
    isLoading: true,
  },
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

  it(`Reducer should toggle set loading and sending form result statuses`, () => {
    const {authSendingResult, isLoading} = initialState;

    expect(reducer(
        {isLoading, authSendingResult}, {
          type: ActionType.SET_LOADING_STATUS,
          payload: true
        })).toEqual({
      authSendingResult: null,
      isLoading: true
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

  it(`Action creator return correct action after set sending form result`, () => {
    expect(ActionCreator.setAuthFormSendingResult(true)).toEqual({
      type: ActionType.SET_AUTH_FORM_ACTION_RESULT,
      payload: true,
    });
  });

  it(`Action creator return correct action after set loading status`, () => {
    expect(ActionCreator.setLoadingStatus(true)).toEqual({
      type: ActionType.SET_LOADING_STATUS,
      payload: true,
    });
  });

  it(`Selector getAuthStatus return right key`, () => {
    expect(getAuthStatus(state)).toEqual(givenAuthorizationStatus);
  });

  it(`Selector getUserData return right key`, () => {
    expect(getUserData(state)).toEqual(userData);
  });

  it(`Selector getSignInLoadingStatus return right key`, () => {
    expect(getSignInLoadingStatus(state)).toEqual(true);
  });

  it(`Selector getSignInLoadingStatus return right key`, () => {
    expect(getAuthFormSendingResult(state)).toEqual(null);
  });
});
