import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "@reducers/reducer";
import {ActionCreator as UserActionCreator, Operation as UserOperation} from "@reducers/user/user";
import {
  Operation as DataOperation,
  ActionCreator as DataActionCreator
} from "@reducers/data/data";

import App from "@components/app/app";

import {createAPI} from "./api";
import {AuthorizationStatus} from "@utils/constants";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onError = (error) => {
  store.dispatch(DataActionCreator.setError(error));
};

const api = createAPI(onUnauthorized, onError);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

let currentFilmsValue;
const storeChangeHandler = () => {
  let previousFilmsValue = currentFilmsValue;
  currentFilmsValue = store.getState().DATA.films;

  if (previousFilmsValue !== currentFilmsValue) {
    unsubscribe();
  }
};

const unsubscribe = store.subscribe(storeChangeHandler);

store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
