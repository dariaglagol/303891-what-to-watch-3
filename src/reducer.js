import {extend} from "@utils/utils";
import films from "@mocks/films.js";
import PromoMovieCover from '@mocks/promo-movie-cover';
import MovieDetails from '@mocks/movie-details';
import Reviews from '@mocks/reviews';
import {DEFAULT_ACTIVE_GENRE, PageTypes} from "@utils/constants";

const InitialState = {
  films,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoMovieCover: PromoMovieCover,
  movieDetails: MovieDetails,
  reviews: Reviews,
  activePage: PageTypes.MAIN,
  isFullscreenPlayerActive: false,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  GET_ACTIVE_PAGE: `GET_ACTIVE_PAGE`,
  TOGGLE_FULLSCREEN_PLAYER: `TOGGLE_FULLSCREEN_PLAYER`,
};

const _filterFilmsByGenre = (movies, activeGenre) => {
  if (activeGenre.single === DEFAULT_ACTIVE_GENRE.single) {
    return movies;
  }

  return movies.filter((movie) => {
    return movie.genre === activeGenre.single;
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
  getActivePage: (page) => {
    return {
      type: ActionType.GET_ACTIVE_PAGE,
      payload: page
    };
  },
  toggleFullscreenPlayer: (state) => {
    return {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: state,
    };
  }
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    case ActionType.GET_MOVIES_BY_GENRE:
      return extend(state, {films: action.payload});
    case ActionType.GET_ACTIVE_PAGE:
      return extend(state, {activePage: action.payload});
    case ActionType.TOGGLE_FULLSCREEN_PLAYER:
      return extend(state, {isFullscreenPlayerActive: action.payload});
    default:
      break;
  }

  return state;
};

export {ActionType, reducer, ActionCreator};
