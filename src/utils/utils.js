import {camelCase, mapKeys} from "lodash";
import {MovieMarksTypes, SIMILAR_FILM_COUNT, AppRoute, TextAreaMinMaxValues} from './constants';

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
  if (!stars || textStatus !== ``) {
    return true;
  }

  return false;
};

const getRoute = (route, id) => {
  return `${route}/${id}`;
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
  getRoute
};
