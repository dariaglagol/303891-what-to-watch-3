import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "@components/main/main";
import MovieDetails from "@components/movie-details/movie-details";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePage: `main`
    };

    this._promoFilmClickHandler = this._promoFilmClickHandler.bind(this);
  }

  _promoFilmClickHandler(activePage) {
    this.setState({
      activePage
    });
  }

  _renderPages() {
    const {activePage} = this.state;
    const {promoMovieCover, films, movieDetails} = this.props;

    switch (activePage) {
      case `main`:
        return (
          <Main
            promoMovieCover={promoMovieCover}
            onPromoFilmClick={this._promoFilmClickHandler}
            films={films}
          />
        );
      case `movie`:
        return (
          <MovieDetails
            promoMovieCover={promoMovieCover}
            films={films}
            movieDetails={movieDetails}
          />
        );
    }

    return null;
  }

  render() {
    const {promoMovieCover, films, movieDetails} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderPages()}
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
  }
}

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
