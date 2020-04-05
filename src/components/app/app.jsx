import React from "react";
import PropTypes from "prop-types";
import {Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import Main from "@components/main/main";
import MovieExtended from "@components/movie-extended/movie-extended";
import withTabs from "@hocs/with-tabs/with-tabs";
import withCatalog from "@hocs/with-catalog/with-catalog";
import withMovieList from "@hocs/with-movie-list/with-movie-list";
import withReview from "@hocs/with-review/with-review";
import Loading from "@components/loading/loading";
import SignIn from "@components/sign-in/sign-in";
import AddReview from "@components/add-review/add-review";
import ErrorMessage from "@components/error-message/error-message";

import {ActionCreator as CommonActionCreator} from "@reducers/common/common";
import {getFullScreenPlayerState} from "@reducers/common/selectors";

import {getError} from "@reducers/common-error/selectors";

import {Operation as UserOperation} from "@reducers/user/user";
import {getAuthStatus, getUserData, getSignInLoadingStatus, getAuthFormSendingResult} from "@reducers/user/selectors";

import {
  ActionCreator as DataActionCreator,
  Operation as DataOperation
} from "@reducers/data/data";
import {
  getActiveGenre,
  getFilmsSelector,
  getReviews,
  getPromoMovie,
  getLoadingStatus,
  getCommentFormSendingResult,
  getFilm,
  getFilms
} from "@reducers/data/selectors.js";

import history from "../../history";
import {AppRoute, AuthorizationStatus} from "@utils/constants";

const MovieExtendedComponentWrapped = withMovieList(withTabs(MovieExtended));
const MainComponentWrapped = withMovieList(withCatalog(Main));
const ReviewComponentWrapped = withReview(AddReview);

const App = (props) => {
  const {
    promoMovie,
    films,
    filteredFilms,
    reviews,
    activeGenre,
    onGenreTabClick,
    onFilmLoad,
    isFullscreenPlayerActive,
    onFullScreenToggle,
    login,
    userData,
    authStatus,
    sendReview,
    isDataLoading,
    commentFormSendingResult,
    error,
    isSignInLoading,
    authFormSendingResult,
    toggleFilmFavorite,
    film
  } = props;

  function _renderErrorMessage() {
    if (Object.keys(error).length) {
      return <ErrorMessage errorMessage={error} />;
    }

    return null;
  }

  function _renderRoot() {
    return (
      <React.Fragment>
        {_renderErrorMessage()}
        <MainComponentWrapped
          userData={userData}
          authStatus={authStatus}
          promoMovie={promoMovie}
          activeGenre={activeGenre}
          onGenreTabClick={onGenreTabClick}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={onFullScreenToggle}
          films={filteredFilms}
          rawFilms={films}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </React.Fragment>
    );
  }

  if (isDataLoading || films.length === 0) {
    return (
      <Loading />
    );
  }

  if (authStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <SignIn
        onSubmit={login}
        userErrors={error}
        isLoading={isSignInLoading}
        authFormSendingResult={authFormSendingResult}
      />
    );
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          {_renderRoot()}
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn
            onSubmit={login}
            userErrors={error}
            isLoading={isSignInLoading}
            authFormSendingResult={authFormSendingResult}
          />
        </Route>
        <Route
          exact
          path={`${AppRoute.FILMS}/:id`}
          render={({match}) => (
            <React.Fragment>
              {_renderErrorMessage()}
              <MovieExtendedComponentWrapped
                match={match}
                userData={userData}
                authStatus={authStatus}
                onFilmLoad={onFilmLoad}
                films={filteredFilms}
                film={film}
                isFullscreenPlayerActive={isFullscreenPlayerActive}
                onFullScreenToggle={onFullScreenToggle}
                reviews={reviews}
                toggleFilmFavorite={toggleFilmFavorite}
              />
            </React.Fragment>
          )}
        />
        <Route
          exact
          path={`${AppRoute.REVIEW}/:id`}
          render={({match}) => (
            <ReviewComponentWrapped
              match={match}
              userData={userData}
              authStatus={authStatus}
              onSubmit={sendReview}
              reviewError={error}
              isLoading={isDataLoading}
              films={filteredFilms}
              commentFormSendingResult={commentFormSendingResult}
            />)}
        />
      </Switch>
    </Router>
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
  films: getFilms(state),
  filteredFilms: getFilmsSelector(state),
  activeGenre: getActiveGenre(state),
  promoMovie: getPromoMovie(state),
  reviews: getReviews(state),
  film: getFilm(state),
  isFullscreenPlayerActive: getFullScreenPlayerState(state),
  authStatus: getAuthStatus(state),
  userData: getUserData(state),
  error: getError(state),
  isDataLoading: getLoadingStatus(state),
  commentFormSendingResult: getCommentFormSendingResult(state),
  isSignInLoading: getSignInLoadingStatus(state),
  authFormSendingResult: getAuthFormSendingResult(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(DataActionCreator.changeGenre(activeGenre));
  },
  onFilmLoad(film) {
    dispatch(DataOperation.loadReviews(film.id));
  },
  onFullScreenToggle(state) {
    dispatch(CommonActionCreator.toggleFullscreenPlayer(state));
  },
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  sendReview(reviewData) {
    dispatch(DataOperation.sendReview(reviewData));
  },
  toggleFilmFavorite(id, status) {
    dispatch(DataOperation.toggleFilmFavorite(id, status));
  }
});

App.propTypes = {
  filteredFilms: PropTypes.oneOfType([
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
  film: PropTypes.exact({
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
    comment: PropTypes.string.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  })),
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  toggleFilmFavorite: PropTypes.func.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
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
  sendReview: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({
      error: PropTypes.string
    }),
    PropTypes.shape({})
  ]),
  isDataLoading: PropTypes.bool.isRequired,
  isSignInLoading: PropTypes.bool.isRequired,
  commentFormSendingResult: PropTypes.bool,
  authFormSendingResult: PropTypes.bool,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


