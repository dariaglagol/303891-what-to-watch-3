import {camelCase, mapKeys} from "lodash";
import {MovieMarksTypes, SIMILAR_FILM_COUNT} from './constants';

const getMovieMark = (score) => {
  let key = ``;

  for (let type in MovieMarksTypes) {
    if (score >= parseInt(MovieMarksTypes[type], 10) && key === ``) {
      key = type;
    }
  }

  return key;
};

const getSimilarMovies = (genre, movies) => {
  return movies.filter((movie) => {
    return movie.genre === genre;
  }).slice(0, SIMILAR_FILM_COUNT);
};

const sliceMovieArray = (movies, count) => {
  return movies.slice(0, count);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const filmAdapter = (film) => {
  return mapKeys(film, (value, key) => {
    return camelCase(key);
  });
};

const filmsAdapter = (films) => {
  return films.map((film) => {
    return filmAdapter(film);
  });
};

export {getMovieMark, getSimilarMovies, extend, sliceMovieArray, filmAdapter, filmsAdapter};
