import {extend, itemAdapter, itemsAdapter} from "@utils/utils.js";
import MovieReviews from "@mocks/reviews";
import {DEFAULT_ACTIVE_GENRE, PageTypes, StatusCode} from "@utils/constants";
import {ActionCreator as CommonActionCreator} from "@reducers/common/common";

const initialState = {
  films: [],
  promoMovie: {},
  activeFilmId: 0,
  reviews: MovieReviews,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  error: {}
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_ACTIVE_FILM_ID: `GET_ACTIVE_FILM_ID`,
  SET_ERROR: `SET_ERROR`,
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: itemsAdapter(films),
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: itemAdapter(film),
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
  setError: (error) => ({
    type: ActionType.SET_ERROR,
    payload: error
  }),
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
        dispatch(CommonActionCreator.setActivePage(PageTypes.MAIN));
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(err));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(err));
      });
  },
  sendReview: (reviewData) => (dispatch, getState, api) => {
    return api.post(`/comments/42`, {
      rating: reviewData.rating,
      comment: reviewData.review,
    })
      .then((response) => {
        switch (response.status) {
          case StatusCode.SUCCESS:
            dispatch(CommonActionCreator.setActivePage(PageTypes.MAIN));
            break;
          default:
            dispatch(ActionCreator.setError(response.data));
            break;
        }
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(err));
      });
  }
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
    case ActionType.SET_ERROR:
      return extend(state, {error: action.payload});
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
