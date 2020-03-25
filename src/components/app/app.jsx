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
import {ActionCreator} from "../../reducer";

const MovieExtendedComponentWrapped = withMovieList(withTabs(MovieExtended));
const MainComponentWrapped = withMovieList(withCatalog(Main));

const App = (props) => {
  const {
    promoMovieCover,
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
            promoMovieCover={promoMovieCover}
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
            promoMovieCover={promoMovieCover}
            onFilmClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
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
            promoMovieCover={promoMovieCover}
            onFilmClick={onPageChange}
            films={films}
            movieDetails={movieDetails}
            reviews={reviews}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
  promoMovieCover: state.promoMovieCover,
  movieDetails: state.movieDetails,
  reviews: state.reviews,
  activePage: state.activePage,
  isFullscreenPlayerActive: state.isFullscreenPlayerActive,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.getMoviesByGenre(activeGenre));
  },
  onPageChange(activePage) {
    dispatch(ActionCreator.getActivePage(activePage));
  },
  onFullScreenToggle(state) {
    dispatch(ActionCreator.toggleFullscreenPlayer(state));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  promoMovieCover: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
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
    runTime: PropTypes.number.isRequired,
    preview: PropTypes.string.isRequired,
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
};
