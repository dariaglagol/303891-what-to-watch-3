import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "@components/main/main";
import MovieDetails from "@components/movie-details/movie-details";

const App = ({promoMovieCover, films, movieDetails}) => {
  const filmTitleClickHandler = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            promoMovieCover={promoMovieCover}
            onTitleClick={filmTitleClickHandler}
            films={films}
          />
        </Route>
        <Route exact path="/dev-movie-details">
          <MovieDetails
            promoMovieCover={promoMovieCover}
            films={films}
            movieDetails={movieDetails}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovieCover: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  movieDetails: PropTypes.exact({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired,
    POSTER: PropTypes.string.isRequired,
    DESCRIPTION: PropTypes.string.isRequired,
    DIRECTOR: PropTypes.string.isRequired,
    STARRING: PropTypes.string.isRequired,
    SCORE: PropTypes.number.isRequired,
    RATING: PropTypes.number.isRequired,
  })
};

export default App;
