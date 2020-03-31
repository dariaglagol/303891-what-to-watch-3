import {AuthorizationStatus, PageTypes} from "@utils/constants";
import {extend, itemAdapter} from "@utils/utils";
import {ActionCreator as CommonActionCreator} from "@reducers/common/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  setUserData: (userData) => {
    let preparedUserData = itemAdapter(userData);
    preparedUserData = extend(preparedUserData, {avatarUrl: `https://htmlacademy-react-3.appspot.com${preparedUserData.avatarUrl}`});
    return {
      type: ActionType.SET_USER_DATA,
      payload: preparedUserData
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_DATA:
      return extend(state, {
        userData: action.payload
      });
    default:
      break;
  }

  return state;
};

const Operation = {
  checkAuth: (onError) => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch(() => {
        onError();
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUserData(response.data));
        dispatch(CommonActionCreator.setActivePage(PageTypes.MAIN));
      });
  },
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
