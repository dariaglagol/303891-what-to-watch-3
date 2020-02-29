import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import FilmsMock from './mocks/films';
import PromoMovieCover from './mocks/promo-movie-cover';
import MovieDetails from './mocks/movie-details';

ReactDOM.render(
    <App
      promoMovieCover={PromoMovieCover}
      movieDetails={MovieDetails}
      films={FilmsMock}
    />,
    document.querySelector(`#root`)
);
