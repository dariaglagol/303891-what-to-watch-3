import {extend, itemAdapter, itemsAdapter} from "@utils/utils.js";
import MovieReviews from "@mocks/reviews";
import {DEFAULT_ACTIVE_GENRE, StatusCode} from "@utils/constants";
import {ActionCreator as ErrorActionCreator} from "@reducers/common-error/common-error";
import history from "../../history";

const initialState = {
  films: [],
  promoMovie: {},
  activeFilmId: 0,
  reviews: MovieReviews,
  activeGenre: DEFAULT_ACTIVE_GENRE,
  commentFormSendingResult: null,
  film: {},
  isLoading: false,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILM: `GET_FILM`,
  SET_ERROR: `SET_ERROR`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  SET_COMMENT_FORM_ACTION_RESULT: `SET_COMMENT_FORM_ACTION_RESULT`
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
  setFilm: (film) => {
    return {
      type: ActionType.GET_FILM,
      payload: itemAdapter(film)
    };
  },
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
  toggleFilmFavorite: (id, status) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.post(`/favorite/${id}/${status}`, {
      film_id: id,
      status,
    }).then((response) => {
      dispatch(ActionCreator.setLoadingStatus(false));
      if (id === getState().DATA.promoMovie.id) {
        dispatch(ActionCreator.loadPromoFilm(response.data));
        return;
      }

      dispatch(ActionCreator.setFilm(response.data));
    });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.setLoadingStatus(false));
        dispatch(ActionCreator.loadPromoFilm(response.data));
      });
  },
  sendReview: (reviewData) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setLoadingStatus(true));

    const activeFilmId = getState().DATA.activeFilmId;

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
    case ActionType.GET_FILM:
      return extend(state, {film: action.payload});
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
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
