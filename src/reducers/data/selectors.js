import {createSelector} from "reselect";
import NameSpace from "@reducers/name-space";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const NAME = NameSpace.DATA;

const _filterFilmsByGenre = (movies, activeGenre) => {
  return movies.filter((movie) => {
    return movie.genre === activeGenre;
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

const getFilm = (state) => {
  return state[NAME].film;
};

const getLoadingStatus = (state) => {
  return state[NAME].isLoading;
};

const getCommentFormSendingResult = (state) => {
  return state[NAME].commentFormSendingResult;
};

const getFilmsSelector = createSelector(
    [getFilms, getFilteredFilms, getActiveGenre],
    (films, filteredFilms, activeGenre) => {
      if (activeGenre !== DEFAULT_ACTIVE_GENRE) {
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
  getLoadingStatus,
  getCommentFormSendingResult,
  getFilm
};
