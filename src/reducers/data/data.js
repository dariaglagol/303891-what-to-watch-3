import {mapKeys, camelCase} from "lodash";
import {extend} from "@utils/utils.js";
import MovieReviews from "@mocks/reviews";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const initialState = {
  films: null,
  promoMovie: null,
  movieDetails: null,
  reviews: MovieReviews,
  activeGenre: DEFAULT_ACTIVE_GENRE,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  GET_MOVIES_BY_GENRE: `GET_MOVIES_BY_GENRE`,
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films.map((film) => {
        return mapKeys(film, (value, key) => {
          return camelCase(key);
        });
      }),
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: mapKeys(film, (value, key) => {
        return camelCase(key);
      }),
    };
  },
  changeGenre: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoMovie: action.payload,
      });
    case ActionType.CHANGE_GENRE:
      return extend(state, {activeGenre: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
