import {createSelector} from "reselect";
import NameSpace from "@reducers/name-space";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const NAME = NameSpace.DATA;

const _filterFilmsByGenre = (movies, activeGenre) => {
  if (activeGenre.single === DEFAULT_ACTIVE_GENRE.single) {
    return movies;
  }

  return movies.filter((movie) => {
    return movie.genre === activeGenre.single;
  });
};

const getFilms = (state) => {
  return state[NAME].films;
};

const getFilteredFilms = (state) => {
  const {films, activeGenre} = state[NAME];
  return _filterFilmsByGenre(films, activeGenre);
};

const getActiveGenre = (state) => {
  return state[NAME].activeGenre;
};

const getMovieCover = (state) => {
  return state[NAME].promoMovie;
};

const getReviews = (state) => {
  return state[NAME].reviews;
};

const getActiveFilmId = (state) => {
  return state[NAME].activeFilmId;
};

const getReviewError = (state) => {
  return state[NAME].error;
};

const getFilmsSelector = createSelector(
    [getFilms, getFilteredFilms, getActiveGenre],
    (films, filteredFilms, activeGenre) => {
      if (activeGenre.single !== DEFAULT_ACTIVE_GENRE.single) {
        return _filterFilmsByGenre(films, activeGenre);
      }
      return films;
    }
);

export {
  getFilms,
  getFilteredFilms,
  getReviews,
  getMovieCover,
  getActiveGenre,
  getFilmsSelector,
  getActiveFilmId,
  getReviewError
};
