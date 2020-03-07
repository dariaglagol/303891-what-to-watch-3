import {MovieMarksTypes} from './constants';

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
  }).splice(0, 4);
};

export {getMovieMark, getSimilarMovies};
