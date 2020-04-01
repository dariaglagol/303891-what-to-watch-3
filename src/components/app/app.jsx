import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import Main from "@components/main/main";
import MovieExtended from "@components/movie-extended/movie-extended";
import withTabs from "@hocs/with-tabs/with-tabs";
import withCatalog from "@hocs/with-catalog/with-catalog";
import withMovieList from "@hocs/with-movie-list/with-movie-list";
import withReview from "@hocs/with-review/with-review";
import {PageTypes} from "@utils/constants";

import {ActionCreator as CommonActionCreator} from "@reducers/common/common";
import {getActivePage, getFullScreenPlayerState} from "@reducers/common/selectors";

import {Operation as UserOperation} from "@reducers/user/user";
import {getAuthStatus, getUserData, getUserError} from "@reducers/user/selectors";

import {ActionCreator as DataActionCreator, Operation as DataOperation} from "@reducers/data/data";
import {
  getActiveGenre,
  getFilmsSelector,
  getReviews,
  getMovieCover,
  getActiveFilmId,
  getReviewError
} from "@reducers/data/selectors.js";

import Loading from "@components/loading/loading";
import SignIn from "@components/sign-in/sign-in";
import AddReview from "@components/add-review/add-review";

const MovieExtendedComponentWrapped = withMovieList(withTabs(MovieExtended));
const MainComponentWrapped = withMovieList(withCatalog(Main));
const ReviewComponentWrapped = withReview(AddReview);

const App = (props) => {
  const {
    promoMovie,
    films,
    reviews,
    activeGenre,
    onGenreTabClick,
    activePage,
    onPageChange,
    isFullscreenPlayerActive,
    onFullScreenToggle,
    activeFilmId,
    login,
    userData,
    userErrors,
    authStatus,
    addReview,
    reviewError,
  } = props;

  const movieDetails = films.find((film) => film.id === activeFilmId) || {};

  function _renderPages() {
    switch (activePage) {
      case PageTypes.MAIN:
        return (
          <MainComponentWrapped
            userData={userData}
            authStatus={authStatus}
            promoMovie={promoMovie}
            onFilmClick={onPageChange}
            onSignInClick={onPageChange}
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
            userData={userData}
            authStatus={authStatus}
            onAddReviewClick={onPageChange}
            onFilmClick={onPageChange}
            onSignInClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={onFullScreenToggle}
            reviews={reviews}
          />
        );
      case PageTypes.LOADING:
        return (
          <Loading />
        );
      case PageTypes.AUTH:
        return (
          <SignIn
            onSubmit={login}
            userErrors={userErrors}
          />
        );
      case PageTypes.REVIEW:
        return (
          <ReviewComponentWrapped
            userData={userData}
            authStatus={authStatus}
            movieDetails={movieDetails}
            onSignInClick={onPageChange}
            onSubmit={addReview}
            reviewError={reviewError}
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
            userData={userData}
            authStatus={authStatus}
            onFilmClick={onPageChange}
            onSignInClick={onPageChange}
            onAddReviewClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={onFullScreenToggle}
            reviews={reviews}
          />
        </Route>
        <Route exact path="/dev-review">
          <ReviewComponentWrapped
            userData={userData}
            authStatus={authStatus}
            movieDetails={movieDetails}
            onSignInClick={onPageChange}
            onSubmit={addReview}
            reviewError={reviewError}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.defaultProps = {
  films: [],
  promoMovie: {},
  reviews: [],
  movieDetails: {},
  userData: {},
};

const mapStateToProps = (state) => ({
  films: getFilmsSelector(state),
  filteredFilms: getFilmsSelector(state),
  activeGenre: getActiveGenre(state),
  promoMovie: getMovieCover(state),
  reviews: getReviews(state),
  activePage: getActivePage(state),
  activeFilmId: getActiveFilmId(state),
  isFullscreenPlayerActive: getFullScreenPlayerState(state),
  authStatus: getAuthStatus(state),
  userData: getUserData(state),
  userErrors: getUserError(state),
  reviewError: getReviewError(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(DataActionCreator.changeGenre(activeGenre));
  },
  onPageChange(activePage, id) {
    if (id) {
      dispatch(DataActionCreator.getActiveFilmId(id));
    }
    dispatch(CommonActionCreator.setActivePage(activePage));
  },
  onFullScreenToggle(state) {
    dispatch(CommonActionCreator.toggleFullscreenPlayer(state));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  addReview(reviewData) {
    dispatch(DataOperation.sendReview(reviewData));
  }
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
    PropTypes.exact({}).isRequired
  ]).isRequired,
  films: PropTypes.oneOfType([
    PropTypes.exact([]).isRequired,
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
    })).isRequired,
  ]).isRequired,
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
  activeFilmId: PropTypes.number.isRequired,
  authStatus: PropTypes.string.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  login: PropTypes.func.isRequired,
  userErrors: PropTypes.shape({
    error: PropTypes.string,
  })
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


