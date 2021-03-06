import {AuthorizationStatus, StatusCode} from "@utils/constants";
import {extend, itemAdapter} from "@utils/utils";
import {ActionCreator as ErrorActionCreator} from "@reducers/common-error/common-error";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userData: {},
  authSendingResult: null,
  isLoading: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_DATA: `SET_USER_DATA`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  SET_AUTH_FORM_ACTION_RESULT: `SET_AUTH_FORM_ACTION_RESULT`
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
  setLoadingStatus: (value) => ({
    type: ActionType.SET_LOADING_STATUS,
    payload: value
  }),
  setAuthFormSendingResult: (value) => {
    return {
      type: ActionType.SET_AUTH_FORM_ACTION_RESULT,
      payload: value,
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
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload,
        authSendingResult: null,
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
        dispatch(ErrorActionCreator.setError(err));
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));

    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.setLoadingStatus(false));

        if (response && response.status === StatusCode.SUCCESS) {
          dispatch(ActionCreator.setUserData(response.data));
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ErrorActionCreator.setError({}));
        }

        dispatch(ActionCreator.setAuthFormSendingResult(false));
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
