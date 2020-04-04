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
import {getActivePage, getFullScreenPlayerState} from "@reducers/common/selectors";

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
  getMovieCover,
  getLoadingStatus,
  getCommentFormSendingResult,
  getFilm
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
    reviews,
    activeGenre,
    onGenreTabClick,
    onFilmClick,
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
    film,
    toggleFilmFavorite
  } = props;

  // const movieDetails = films.find((filmItem) => filmItem.id === activeFilmId) || film;
  // function _renderPages() {
  //   switch (activePage) {
  //     case PageTypes.MAIN:
  //       return (
  //         <React.Fragment>
  //           {_renderErrorMessage()}
  //           <MainComponentWrapped
  //             userData={userData}
  //             authStatus={authStatus}
  //             promoMovie={promoMovie}
  //             onFilmClick={onPageChange}
  //             onSignInClick={onPageChange}
  //             activeGenre={activeGenre}
  //             onGenreTabClick={onGenreTabClick}
  //             isFullscreenPlayerActive={isFullscreenPlayerActive}
  //             onFullScreenToggle={onFullScreenToggle}
  //             films={films}
  //           />
  //         </React.Fragment>
  //       );
  //     case PageTypes.MOVIE:
  //       return (
  //         <React.Fragment>
  //           {_renderErrorMessage()}
  //           <MovieExtendedComponentWrapped
  //             userData={userData}
  //             authStatus={authStatus}
  //             onFilmClick={onPageChange}
  //             onSignInClick={onPageChange}
  //             films={films}
  //             movieDetails={movieDetails}
  //             isFullscreenPlayerActive={isFullscreenPlayerActive}
  //             onFullScreenToggle={onFullScreenToggle}
  //             reviews={reviews}
  //           />
  //         </React.Fragment>
  //       );
  //     case PageTypes.LOADING:
  //       return (
  //         <Loading />
  //       );
  //     case PageTypes.AUTH:
  //       return (
  //         <SignIn
  //           onSubmit={login}
  //           userErrors={error}
  //           isLoading={isSignInLoading}
  //           authFormSendingResult={authFormSendingResult}
  //         />
  //       );
  //     case PageTypes.REVIEW:
  //       return (
  //         <ReviewComponentWrapped
  //           userData={userData}
  //           authStatus={authStatus}
  //           movieDetails={movieDetails}
  //           onSignInClick={onPageChange}
  //           onSubmit={sendReview}
  //           reviewError={error}
  //           isLoading={isReviewFromLoading}
  //           commentFormSendingResult={commentFormSendingResult}
  //         />
  //       );
  //   }
  //
  //   return null;
  // }

  function _renderErrorMessage() {
    if (Object.keys(error).length) {
      return <ErrorMessage errorMessage={error} />;
    }

    return null;
  }

  function _renderRoot() {
    if (isDataLoading) {
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
      <React.Fragment>
        {_renderErrorMessage()}
        <MainComponentWrapped
          userData={userData}
          authStatus={authStatus}
          promoMovie={promoMovie}
          onFilmClick={onFilmClick}
          activeGenre={activeGenre}
          onGenreTabClick={onGenreTabClick}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={onFullScreenToggle}
          films={films}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </React.Fragment>
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
        <Route exact path={`${AppRoute.MOVIE}/:id`}>
          <React.Fragment>
            {_renderErrorMessage()}
            <MovieExtendedComponentWrapped
              userData={userData}
              authStatus={authStatus}
              onFilmClick={onFilmClick}
              films={films}
              movieDetails={film}
              isFullscreenPlayerActive={isFullscreenPlayerActive}
              onFullScreenToggle={onFullScreenToggle}
              reviews={reviews}
              toggleFilmFavorite={toggleFilmFavorite}
            />
          </React.Fragment>
        </Route>
        <Route exact path={`${AppRoute.REVIEW}/:id`}>
          <ReviewComponentWrapped
            userData={userData}
            authStatus={authStatus}
            movieDetails={film}
            onSubmit={sendReview}
            reviewError={error}
            isLoading={isDataLoading}
            commentFormSendingResult={commentFormSendingResult}
          />
        </Route>
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
  films: getFilmsSelector(state),
  filteredFilms: getFilmsSelector(state),
  activeGenre: getActiveGenre(state),
  promoMovie: getMovieCover(state),
  reviews: getReviews(state),
  activePage: getActivePage(state),
  film: getFilm(state),
  isFullscreenPlayerActive: getFullScreenPlayerState(state),
  authStatus: getAuthStatus(state),
  userData: getUserData(state),
  error: getError(state),
  isDataLoading: getLoadingStatus(state),
  commentFormSendingResult: getCommentFormSendingResult(state),
  isSignInLoading: getSignInLoadingStatus(state),
  authFormSendingResult: getAuthFormSendingResult(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(DataActionCreator.changeGenre(activeGenre));
  },
  onFilmClick(film) {
    if (film) {
      dispatch(DataActionCreator.setFilm(film));
    }
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
  onFilmClick: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
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


