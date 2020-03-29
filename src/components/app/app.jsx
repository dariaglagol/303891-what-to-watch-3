import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import Main from "@components/main/main";
import MovieExtended from "@components/movie-extended/movie-extended";
import withTabs from "@hocs/with-tabs/with-tabs";
import withCatalog from "@hocs/with-catalog/with-catalog";
import withMovieList from "@hocs/with-movie-list/with-movie-list";

import {PageTypes} from "@utils/constants";

import {ActionCreator as CommonActionCreator} from "@reducers/common/common";
import {getActivePage, getFullScreenPlayerState} from "@reducers/common/selectors";

import {Operation as UserOperation} from "@reducers/user/user";

import {ActionCreator as DataActionCreator} from "@reducers/data/data";
import {getActiveGenre, getFilteredFilms, getReviews, getMovieDetails, getMovieCover} from "@reducers/data/selectors.js";

const MovieExtendedComponentWrapped = withMovieList(withTabs(MovieExtended));
const MainComponentWrapped = withMovieList(withCatalog(Main));

const App = (props) => {
  const {
    promoMovie,
    films,
    movieDetails,
    reviews,
    activeGenre,
    onGenreTabClick,
    activePage,
    onPageChange,
    isFullscreenPlayerActive,
    onFullScreenToggle,
  } = props;

  function _renderPages() {
    switch (activePage) {
      case PageTypes.MAIN:
        return (
          <MainComponentWrapped
            promoMovie={promoMovie}
            onFilmClick={onPageChange}
            activeGenre={activeGenre}
            onGenreTabClick={onGenreTabClick}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={onFullScreenToggle}
            films={films}
          />
        );
      case PageTypes.MOVIE:
        return (
          <MovieExtendedComponentWrapped
            promoMovie={promoMovie}
            onFilmClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={onFullScreenToggle}
            reviews={reviews}
          />
        );
    }

    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderPages()}
        </Route>
        <Route exact path="/dev-movie-details">
          <MovieExtendedComponentWrapped
            promoMovie={promoMovie}
            onFilmClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={onFullScreenToggle}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  films: getFilteredFilms(state),
  filteredFilms: getFilteredFilms(state),
  activeGenre: getActiveGenre(state),
  promoMovie: getMovieCover(state),
  movieDetails: getMovieDetails(state),
  reviews: getReviews(state),
  activePage: getActivePage(state),
  isFullscreenPlayerActive: getFullScreenPlayerState(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(DataActionCreator.changeGenre(activeGenre));
  },
  onPageChange(activePage) {
    dispatch(CommonActionCreator.getActivePage(activePage));
  },
  onFullScreenToggle(state) {
    dispatch(CommonActionCreator.toggleFullscreenPlayer(state));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
});

App.propTypes = {
  promoMovie: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }),
    PropTypes.shape({})
  ]),
  films: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    })),
    PropTypes.array,
  ]).isRequired,
  movieDetails: PropTypes.exact({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  reviews: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  activeGenre: PropTypes.exact({
    multiply: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
  }).isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


