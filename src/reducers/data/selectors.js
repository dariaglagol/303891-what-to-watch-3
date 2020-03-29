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

const getMovieDetails = (state) => {
  return state[NAME].movieDetails;
};

const getReviews = (state) => {
  return state[NAME].reviews;
};

export {getFilms, getFilteredFilms, getReviews, getMovieDetails, getMovieCover, getActiveGenre};
