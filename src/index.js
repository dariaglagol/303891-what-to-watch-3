import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import FilmsMock from './mocks/films';
import PromoMovieCover from './mocks/promo-movie-cover';
import MovieDetails from './mocks/movie-details';
import Reviews from './mocks/reviews';

ReactDOM.render(
    <App
      promoMovieCover={PromoMovieCover}
      movieDetails={MovieDetails}
      films={FilmsMock}
      reviews={Reviews}
    />,
    document.querySelector(`#root`)
);
