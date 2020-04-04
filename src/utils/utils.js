import {camelCase, mapKeys, snakeCase} from "lodash";
import {MovieMarksTypes, SIMILAR_FILM_COUNT, TextAreaMinMaxValues, DEFAULT_ACTIVE_GENRE} from './constants';

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

const itemAdapter = (film) => {
  return mapKeys(film, (value, key) => {
    return camelCase(key);
  });
};

const itemsAdapter = (films) => {
  return films.map((film) => {
    return itemAdapter(film);
  });
};

const toRawItemsAdapter = (data) => {
  return mapKeys(data, (value, key) => {
    return snakeCase(key);
  });
};

const validateTextAreaInput = (text) => {
  const textLength = text.length;
  let remainingCharacters = 0;
  if (textLength > TextAreaMinMaxValues.MAX) {
    remainingCharacters = textLength - TextAreaMinMaxValues.MAX;

    return `Удалите ${remainingCharacters} символов`;
  } else if (textLength < TextAreaMinMaxValues.MIN) {
    remainingCharacters = TextAreaMinMaxValues.MIN - textLength;

    return `Введите еще ${remainingCharacters} символов`;
  }

  return ``;
};

const isSubmitButtonDisable = (stars, textStatus) => {
  return !stars || textStatus !== ``;
};

const getRoute = (route, id) => {
  return `${route}/${id}`;
};

const getGenres = (films) => {
  const genres = new Set();
  genres.add(DEFAULT_ACTIVE_GENRE);
  films.forEach((film) => {
    genres.add(film.genre);
  });

  return genres;
};

export {
  getMovieMark,
  getSimilarMovies,
  isSubmitButtonDisable,
  extend,
  validateTextAreaInput,
  sliceMovieArray,
  itemAdapter,
  itemsAdapter,
  getRoute,
  getGenres,
  toRawItemsAdapter,
};
