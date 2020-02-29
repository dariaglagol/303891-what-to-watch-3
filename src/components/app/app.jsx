import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "@components/main/main";
import MovieDetails from "@components/movie-details/movie-details";

const App = ({filmData, films}) => {
  const filmTitleClickHandler = () => {};

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            filmData={filmData}
            onTitleClick={filmTitleClickHandler}
            films={films}
          />
        </Route>
        <Route exact path="/dev-movie-details">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  filmData: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired
};

export default App;
