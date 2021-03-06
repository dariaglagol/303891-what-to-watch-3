import {extend, itemAdapter, itemsAdapter, toRawItemsAdapter, replaceFilmItem} from "@utils/utils.js";
import {DEFAULT_ACTIVE_GENRE, StatusCode} from "@utils/constants";
import {ActionCreator as ErrorActionCreator} from "@reducers/common-error/common-error";
import history from "../../history";
import {getFilms, getPromoMovie} from "@reducers/data/selectors";

const initialState = {
  films: [],
  promoMovie: {},
  reviews: [],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  commentFormSendingResult: null,
  isLoading: false,
  watchList: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_GENRE: `CHANGE_GENRE`,
  SET_FILM: `SET_FILM`,
  SET_LOADING_STATUS: `SET_LOADING_STATUS`,
  SET_COMMENT_FORM_ACTION_RESULT: `SET_COMMENT_FORM_ACTION_RESULT`,
  LOAD_WATCH_LIST: `LOAD_WATCH_LIST`
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
  setWatchList: (films) => {
    return {
      type: ActionType.LOAD_WATCH_LIST,
      payload: itemsAdapter(films)
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
      const filmsList = getFilms(getState());
      const promoMovie = getPromoMovie(getState());

      const freshFilms = replaceFilmItem(filmsList, freshFilm);
      if (freshFilm.id === promoMovie.id) {
        dispatch(ActionCreator.loadPromoFilm(freshFilm));
      }
      dispatch(ActionCreator.loadFilms(freshFilms));
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
          dispatch(ErrorActionCreator.setError({}));
          history.goBack();
        }

        dispatch(ActionCreator.setCommentFormSendingResult(false));
      });
  },
  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.loadReviews(response.data));
      });
  },
  loadWatchList: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.setWatchList(response.data));
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
    case ActionType.SET_LOADING_STATUS:
      return extend(state, {
        isLoading: action.payload,
        commentFormSendingResult: null,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_WATCH_LIST:
      return extend(state, {
        watchList: action.payload,
      });
    default:
      break;
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
