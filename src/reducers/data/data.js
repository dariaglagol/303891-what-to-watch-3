import {extend, filmAdapter, filmsAdapter} from "@utils/utils.js";
import MovieReviews from "@mocks/reviews";
import {DEFAULT_ACTIVE_GENRE, PageTypes} from "@utils/constants";
import {ActionCreator as CommonActionCreator} from "@reducers/common/common";

const initialState = {
  films: [],
  promoMovie: {},
  activeFilmId: 0,
  reviews: MovieReviews,
  activeGenre: DEFAULT_ACTIVE_GENRE,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_ACTIVE_FILM_ID: `GET_ACTIVE_FILM_ID`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: filmsAdapter(films),
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmAdapter(film),
    };
  },
  changeGenre: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
  getActiveFilmId: (id) => ({
    type: ActionType.GET_ACTIVE_FILM_ID,
    payload: id
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
        dispatch(CommonActionCreator.setActivePage(PageTypes.MAIN));
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
    case ActionType.GET_ACTIVE_FILM_ID:
      return extend(state, {activeFilmId: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
