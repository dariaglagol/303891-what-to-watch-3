import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/app";
import {createStore} from "redux";
import {Provider} from "react-redux";
// import FilmsMock from './mocks/films';
import PromoMovieCover from './mocks/promo-movie-cover';
import MovieDetails from './mocks/movie-details';
import Reviews from './mocks/reviews';
import {reducer} from "./reducer";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promoMovieCover={PromoMovieCover}
        movieDetails={MovieDetails}
        reviews={Reviews}
      />,
    </Provider>,
    document.querySelector(`#root`)
);
