import {extend, itemAdapter, itemsAdapter, toRawItemsAdapter} from "@utils/utils.js";
import {DEFAULT_ACTIVE_GENRE, StatusCode} from "@utils/constants";
import {ActionCreator as ErrorActionCreator} from "@reducers/common-error/common-error";
import history from "../../history";
import {getPromoMovie} from "@reducers/data/selectors";

const initialState = {
  films: [],
  promoMovie: {},
  filmId: 0,
  reviews: [],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  commentFormSendingResult: null,
  film: null,
  isLoading: false,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SET_FILM: `SET_FILM`,
  SET_ERROR: `SET_ERROR`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  SET_COMMENT_FORM_ACTION_RESULT: `SET_COMMENT_FORM_ACTION_RESULT`,
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
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: itemsAdapter(reviews),
    };
  },
  changeGenre: (newGenre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: newGenre,
  }),
  setError: () => ({
    type: ActionType.SET_ERROR
  }),
  setLoadingStatus: (value) => ({
    type: ActionType.SET_LOADING_STATUS,
    payload: value
  }),
  setCommentFormSendingResult: (value) => {
    return {
      type: ActionType.SET_COMMENT_FORM_ACTION_RESULT,
      payload: value,
    };
  },
  setFilm: (film) => {
    return {
      type: ActionType.SET_FILM,
      payload: itemAdapter(film),
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.setLoadingStatus(false));
        dispatch(ActionCreator.loadFilms(response.data));
      });
  },
  toggleFilmFavorite: (filmId, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    const data = toRawItemsAdapter({filmId, status});

    return api.post(`/favorite/${filmId}/${status}`, data).then((response) => {
      dispatch(ActionCreator.setLoadingStatus(false));
      const freshFilm = response.data;
      const promoFilm = getPromoMovie(getState());
      if (filmId === promoFilm.id) {
        dispatch(ActionCreator.loadPromoFilm(freshFilm));
        return;
      }

      dispatch(ActionCreator.setFilm(response.data));
    });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },
  sendReview: (reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));

    const activeFilmId = reviewData.id;

    return api.post(`/comments/${activeFilmId}`, {
      rating: reviewData.stars,
      comment: reviewData.text,
    })
      .then((response) => {
        dispatch(ActionCreator.setLoadingStatus(false));

        if (response && response.status === StatusCode.SUCCESS) {
          dispatch(ActionCreator.setCommentFormSendingResult(true));
          history(history.goBack());
          dispatch(ErrorActionCreator.setError({}));
        }

        dispatch(ActionCreator.setCommentFormSendingResult(false));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setLoadingStatus(false));
        dispatch(ActionCreator.loadReviews(response.data));
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
    case ActionType.SET_FILM:
      return extend(state, {
        film: action.payload
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        isLoading: false,
        commentFormSendingResult: false,
      });
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload,
        commentFormSendingResult: null,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
