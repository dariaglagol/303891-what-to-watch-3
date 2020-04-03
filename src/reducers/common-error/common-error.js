import {AuthorizationStatus} from "@utils/constants";
import {extend} from "@utils/utils";

const initialState = {
  error: {},
};

const ActionType = {
  SET_ERROR: `SET_ERROR`,
};

const ActionCreator = {
  setError: (error) => {
    return {
      type: ActionType.SET_ERROR,
      payload: error
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR:
      return extend(state, {
        error: action.payload
      });
    default:
      break;
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  reducer,
};
