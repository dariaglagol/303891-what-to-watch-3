import {extend} from "@utils/utils";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";
import films from "@mocks/films.js";
import PromoMovieCover from '@mocks/promo-movie-cover';
import MovieDetails from '@mocks/movie-details';
import Reviews from '@mocks/reviews';

const InitialState = {
  films,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoMovieCover: PromoMovieCover,
  movieDetails: MovieDetails,
  reviews: Reviews,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const _filterFilmsByGenre = (movies, activeGenre) => {
  if (activeGenre === DEFAULT_ACTIVE_GENRE) {
    return movies;
  }

  return movies.filter((movie) => {
    return movie.genre === activeGenre;
  });
};

const ActionCreator = {
  changeGenre: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
  getMoviesByGenre: (newGenre) => {
    const filmsByGenre = _filterFilmsByGenre(films, newGenre);

    return {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filmsByGenre
    };
  },
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {films: action.payload});
    default:
      break;
  }

  return state;
};

export {ActionType, reducer, ActionCreator};
