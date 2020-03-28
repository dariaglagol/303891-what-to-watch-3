import NameSpace from "@reducers/name-space";

const NAME = NameSpace.DATA;

const getFilms = (state) => {
  return state[NAME].films;
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

export {getFilms, getReviews, getMovieDetails, getMovieCover};
