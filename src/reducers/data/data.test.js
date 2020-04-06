import {reducer, ActionCreator, ActionType} from "./data";
import {
  getFilms,
  getFilteredFilms,
  getReviews,
  getPromoMovie,
  getActiveGenre,
  getLoadingStatus,
  getCommentFormSendingResult,
  getWatchList
} from "./selectors";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const filteredFilms = [
  {
    name: `name`,
    genre: `Comedy`,
    posterImage: `posterImage`,
    previewImage: `previewImage`,
    backgroundImage: `backgroundImage`,
    backgroundColor: `backgroundColor`,
    description: `description`,
    rating: 124,
    scoresCount: 8.9,
    director: `director`,
    starring: [`starring`, `starring`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `videoLink`,
    previewVideoLink: `previewVideoLink`,
  }, {
    name: `name 2`,
    genre: `Comedy`,
    posterImage: `posterImage 2`,
    previewImage: `previewImage 2`,
    backgroundImage: `backgroundImage 2`,
    backgroundColor: `backgroundColor 2`,
    description: `description 2`,
    rating: 124,
    scoresCount: 8.9,
    director: `director 2`,
    starring: [`starring 2`, `starring 2`],
    runTime: 113,
    released: 2020,
    id: 2,
    isFavorite: false,
    videoLink: `videoLink 2`,
    previewVideoLink: `previewVideoLink 2`,
  },
];

const filmList = [
  {
    name: `name`,
    genre: `Comedy`,
    posterImage: `posterImage`,
    previewImage: `previewImage`,
    backgroundImage: `backgroundImage`,
    backgroundColor: `backgroundColor`,
    description: `description`,
    rating: 124,
    scoresCount: 8.9,
    director: `director`,
    starring: [`starring`, `starring`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `videoLink`,
    previewVideoLink: `previewVideoLink`,
  }, {
    name: `name 2`,
    genre: `Comedy`,
    posterImage: `posterImage 2`,
    previewImage: `previewImage 2`,
    backgroundImage: `backgroundImage 2`,
    backgroundColor: `backgroundColor 2`,
    description: `description 2`,
    rating: 124,
    scoresCount: 8.9,
    director: `director 2`,
    starring: [`starring 2`, `starring 2`],
    runTime: 113,
    released: 2020,
    id: 2,
    isFavorite: false,
    videoLink: `videoLink 2`,
    previewVideoLink: `previewVideoLink 2`,
  },
];

const reviewsList = [{
  comment: `text`,
  user: {
    name: `author`,
    id: 1
  },
  date: `2020-04-04T05:57:30.676Z`,
  rating: 8.9,
  id: 1
}, {
  comment: `text`,
  user: {
    name: `author`,
    id: 4
  },
  date: `2020-04-03T05:57:30.676Z`,
  rating: 8.9,
  id: 3
}];

const GIVEN_GENRE = `Comedy`;

const singleMovie = {
  name: `givenPromoMovie name`,
  genre: `givenPromoMovie genre`,
  posterImage: `givenPromoMovie posterImage`,
  previewImage: `givenPromoMovie previewImage`,
  backgroundImage: `givenPromoMovie backgroundImage`,
  backgroundColor: `givenPromoMovie backgroundColor`,
  description: `givenPromoMovie description`,
  rating: 124,
  scoresCount: 8.9,
  director: ` givenPromoMovie director`,
  starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
  runTime: 113,
  released: 2020,
  id: 1,
  isFavorite: false,
  videoLink: `givenPromoMovie videoLink`,
  previewVideoLink: `givenPromoMovie previewVideoLink`,
};

const state = {
  DATA: {
    films: [
      {
        name: `name`,
        genre: `Comedy`,
        posterImage: `posterImage`,
        previewImage: `previewImage`,
        backgroundImage: `backgroundImage`,
        backgroundColor: `backgroundColor`,
        description: `description`,
        rating: 124,
        scoresCount: 8.9,
        director: `director`,
        starring: [`starring`, `starring`],
        runTime: 113,
        released: 2020,
        id: 1,
        isFavorite: false,
        videoLink: `videoLink`,
        previewVideoLink: `previewVideoLink`,
      }, {
        name: `name 2`,
        genre: `Comedy`,
        posterImage: `posterImage 2`,
        previewImage: `previewImage 2`,
        backgroundImage: `backgroundImage 2`,
        backgroundColor: `backgroundColor 2`,
        description: `description 2`,
        rating: 124,
        scoresCount: 8.9,
        director: `director 2`,
        starring: [`starring 2`, `starring 2`],
        runTime: 113,
        released: 2020,
        id: 2,
        isFavorite: false,
        videoLink: `videoLink 2`,
        previewVideoLink: `previewVideoLink 2`,
      },
    ],
    promoMovie: {
      name: `givenPromoMovie name`,
      genre: `givenPromoMovie genre`,
      posterImage: `givenPromoMovie posterImage`,
      previewImage: `givenPromoMovie previewImage`,
      backgroundImage: `givenPromoMovie backgroundImage`,
      backgroundColor: `givenPromoMovie backgroundColor`,
      description: `givenPromoMovie description`,
      rating: 124,
      scoresCount: 8.9,
      director: ` givenPromoMovie director`,
      starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `givenPromoMovie videoLink`,
      previewVideoLink: `givenPromoMovie previewVideoLink`,
    },
    activeGenre: DEFAULT_ACTIVE_GENRE,
    reviews: reviewsList,
    commentFormSendingResult: true,
    isLoading: false,
    watchList: [
      {
        name: `name`,
        genre: `Comedy`,
        posterImage: `posterImage`,
        previewImage: `previewImage`,
        backgroundImage: `backgroundImage`,
        backgroundColor: `backgroundColor`,
        description: `description`,
        rating: 124,
        scoresCount: 8.9,
        director: `director`,
        starring: [`starring`, `starring`],
        runTime: 113,
        released: 2020,
        id: 1,
        isFavorite: false,
        videoLink: `videoLink`,
        previewVideoLink: `previewVideoLink`,
      }, {
        name: `name 2`,
        genre: `Comedy`,
        posterImage: `posterImage 2`,
        previewImage: `previewImage 2`,
        backgroundImage: `backgroundImage 2`,
        backgroundColor: `backgroundColor 2`,
        description: `description 2`,
        rating: 124,
        scoresCount: 8.9,
        director: `director 2`,
        starring: [`starring 2`, `starring 2`],
        runTime: 113,
        released: 2020,
        id: 2,
        isFavorite: false,
        videoLink: `videoLink 2`,
        previewVideoLink: `previewVideoLink 2`,
      },
    ]
  }
};

const initialState = {
  films: [],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoMovie: {},
  isLoading: false,
  reviews: [],
  commentFormSendingResult: null,
  watchList: [],
};

describe(`Data reducer tests`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should change current genre by a given value`, () => {
    const {films} = initialState;

    expect(reducer({
      activeGenre: DEFAULT_ACTIVE_GENRE,
      films
    }, {
      type: ActionType.CHANGE_GENRE,
      payload: GIVEN_GENRE
    })).toEqual({
      films,
      activeGenre: GIVEN_GENRE,
    });
  });

  it(`Reducer should change current watchlist film id by a given value`, () => {
    const {watchList} = initialState;

    expect(reducer({
      watchList
    }, {
      type: ActionType.LOAD_WATCH_LIST,
      payload: filmList
    })).toEqual({
      watchList: filmList
    });
  });

  it(`Reducer should change film empty array by a given array`, () => {
    const {films} = initialState;

    expect(reducer({
      films
    }, {
      type: ActionType.LOAD_FILMS,
      payload: filmList
    })).toEqual({
      films: filmList,
    });
  });

  it(`Reducer should change empty promo film id by a given object`, () => {
    const {promoMovie} = initialState;

    expect(reducer({
      promoMovie
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: singleMovie
    })).toEqual({
      promoMovie: singleMovie,
    });
  });

  it(`Reducer should set isLoading property by a given value`, () => {
    const {isLoading} = initialState;

    expect(reducer({isLoading}, {
      type: ActionType.SET_LOADING_STATUS,
      payload: true
    })).toEqual({
      commentFormSendingResult: null,
      isLoading: true
    });
  });

  it(`Reducer should set reviews property by a given value`, () => {
    const {reviews} = initialState;

    expect(reducer({reviews}, {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    })).toEqual({
      reviews
    });
  });
});

describe(`Action Creator tests`, () => {
  it(`Action creator return correct action after change genre`, () => {
    expect(ActionCreator.changeGenre(GIVEN_GENRE)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: GIVEN_GENRE,
    });
  });

  it(`Action creator return correct action after call`, () => {
    expect(ActionCreator.loadReviews(reviewsList)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: reviewsList,
    });
  });

  it(`Action creator return correct watch list`, () => {
    expect(ActionCreator.setWatchList(filmList)).toEqual({
      type: ActionType.LOAD_WATCH_LIST,
      payload: filmList,
    });
  });

  it(`Action creator return correct film list`, () => {
    expect(ActionCreator.loadFilms(filmList)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmList,
    });
  });

  it(`Action creator return correct promo film`, () => {
    expect(ActionCreator.loadPromoFilm(singleMovie)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: singleMovie,
    });
  });

  it(`Action creator return correct isLoading status`, () => {
    expect(ActionCreator.setLoadingStatus(true)).toEqual({
      type: ActionType.SET_LOADING_STATUS,
      payload: true,
    });
  });

  it(`Action creator return correct commentFormSendingResult status`, () => {
    expect(ActionCreator.setCommentFormSendingResult(true)).toEqual({
      type: ActionType.SET_COMMENT_FORM_ACTION_RESULT,
      payload: true,
    });
  });
});

describe(`Selectors tests`, () => {
  it(`Selector getLoadingStatus return right key`, () => {
    expect(getLoadingStatus(state)).toEqual(false);
  });

  it(`Selector getFilms return right key`, () => {
    expect(getFilms(state)).toEqual(filmList);
  });

  it(`Selector getFilteredFilms return right key`, () => {
    state.DATA.activeGenre = GIVEN_GENRE;

    expect(getFilteredFilms(state)).toEqual(filteredFilms);
  });

  it(`Selector getReviews return right key`, () => {
    expect(getReviews(state)).toEqual(reviewsList);
  });

  it(`Selector getMovieCover return right key`, () => {
    expect(getPromoMovie(state)).toEqual(singleMovie);
  });

  it(`Selector getActiveGenre return right key`, () => {
    expect(getActiveGenre(state)).toEqual(GIVEN_GENRE);
  });

  it(`Selector getCommentFormSendingResult return right key`, () => {
    expect(getCommentFormSendingResult(state)).toEqual(true);
  });

  it(`Selector getWatchList return right key`, () => {
    expect(getWatchList(state)).toEqual(filmList);
  });
});
