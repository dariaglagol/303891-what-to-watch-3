import films from "@mocks/films.js";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";
import {extend} from "@utils/utils";

const InitialState = {
  films,
  activeGenre: DEFAULT_ACTIVE_GENRE,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
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

export {reducer, ActionType, ActionCreator};
