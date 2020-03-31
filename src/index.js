import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

import reducer from "@reducers/reducer";
import {ActionCreator as UserActionCreator} from "@reducers/user/user";
import {Operation as DataOperation} from "@reducers/data/data";
import {ActionCreator as CommonActionCreator} from "@reducers/common/common";

import App from "@components/app/app";
import ErrorMessage from "@components/error-message/error-message";

import {createAPI} from "./api";
import {AuthorizationStatus, PageTypes} from "@utils/constants";

const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onError = (response) => {
  ReactDOM.render(
      <ErrorMessage response={response} />,
      document.querySelector(`#root`)
  );
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

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.querySelector(`#root`)
);
