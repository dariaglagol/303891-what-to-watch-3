import {extend} from "@utils/utils";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";
import films from "@mocks/films";

const InitialState = {
  films,
  activeGenre: DEFAULT_ACTIVE_GENRE
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
};

const ActionCreator = {
  changeGenre: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
  getMoviesByGenre: (moviesByGenre) => ({
    type: ActionType.GET_MOVIES_BY_GENRE,
    payload: moviesByGenre
  }),
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
