import {MOVIE_MARKS} from './constants';

const getMovieMark = (score) => {
  const movieMarksKeys = MOVIE_MARKS.keys();

  const movieMarkKey = [...movieMarksKeys].find((key) => {
    return score >= parseInt(key, 10);
  });

  return MOVIE_MARKS.get(movieMarkKey);
};

const getSimilarMovies = (genre, movies) => {
  return movies.filter((movie) => {
    return movie.genre === genre;
  });
};

export {getMovieMark, getSimilarMovies};
