import {AuthorizationStatus, PageTypes, StatusCode} from "@utils/constants";
import {extend, itemAdapter} from "@utils/utils";
import {ActionCreator as CommonActionCreator} from "@reducers/common/common";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  error: {},
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
  SET_ERROR: `SET_ERROR`,
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
  },
  setError: (error) => {
    return {
      type: ActionType.SET_ERROR,
      payload: error
    };
  },
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
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
    default:
      break;
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response && response.status === StatusCode.SUCCESS) {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.setUserData(response.data));
        }
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(err));
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        if (response.status === StatusCode.SUCCESS) {
          dispatch(ActionCreator.setUserData(response.data));
          dispatch(CommonActionCreator.setActivePage(PageTypes.MAIN));
        }
        if (response.status === StatusCode.AUTH_ERROR) {
          dispatch(ActionCreator.setError(response.data));
        }

        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(err));
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
