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
  }).splice(0, SIMILAR_FILM_COUNT);
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getMovieMark, getSimilarMovies, extend};
