import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from "@components/main/main";
import MovieExtended from "@components/movie-extended/movie-extended";
import withMovieExtended from "@hocs/with-movie-extended/with-movie-extended";
import {PageTypes} from "@utils/constants";

const movieExtendedComponentWrapped = withMovieExtended(MovieExtended);

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePage: PageTypes.MAIN
    };

    this._filmClickHandler = this._filmClickHandler.bind(this);
  }

  _filmClickHandler(activePage) {
    this.setState({
      activePage
    });
  }

  _renderPages() {
    const {activePage} = this.state;
    const {promoMovieCover, films, movieDetails} = this.props;

    switch (activePage) {
      case PageTypes.MAIN:
        return (
          <Main
            promoMovieCover={promoMovieCover}
            onFilmClick={this._filmClickHandler}
            films={films}
          />
        );
      case PageTypes.MOVIE:
        return (
          <MovieExtended
            promoMovieCover={promoMovieCover}
            onFilmClick={this._filmClickHandler}
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
            <MovieExtended
              promoMovieCover={promoMovieCover}
              onFilmClick={this._filmClickHandler}
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
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  movieDetails: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  })
};
