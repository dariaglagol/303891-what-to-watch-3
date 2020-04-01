import {reducer, ActionCreator, ActionType} from "./data";
import {
  getFilms,
  getFilteredFilms,
  getReviews,
  getActiveFilmId,
  getMovieCover,
  getActiveGenre,
  getReviewError,
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
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: 8.9
}, {
  text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  author: `Bill Goodykoontz`,
  date: `November 18, 2015`,
  rating: 8.0
}, {
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: 8.9
}, {
  text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  author: `Bill Goodykoontz`,
  date: `November 18, 2015`,
  rating: 8.0
}, {
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: 8.9
}, {
  text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  author: `Bill Goodykoontz`,
  date: `November 18, 2015`,
  rating: 8.0
}, {
  text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
  rating: 8.9
}, {
  text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  author: `Bill Goodykoontz`,
  date: `November 18, 2015`,
  rating: 8.0
}];

const changedActiveFilmId = 1;

const GIVEN_GENRE = {
  multiply: `Comedies`,
  single: `Comedy`,
};

const givenPromoMovie = {
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
    reviews: [{
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: 8.9
    }, {
      text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: 8.0
    }, {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: 8.9
    }, {
      text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: 8.0
    }, {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: 8.9
    }, {
      text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: 8.0
    }, {
      text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
      author: `Kate Muir`,
      date: `December 24, 2016`,
      rating: 8.9
    }, {
      text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
      author: `Bill Goodykoontz`,
      date: `November 18, 2015`,
      rating: 8.0
    },
    ],
    activeFilmId: 1,
    error: {},
  }
};

const initialState = {
  films: [],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoMovie: {},
  activeFilmId: 0,
  error: {},
  reviews: [{
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  }, {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0
  }, {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  }, {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0
  }, {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  }, {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0
  }, {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  }, {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0
  },
  ],
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

  it(`Reducer should change current film id by a given value`, () => {
    const {activeFilmId} = initialState;

    expect(reducer({
      activeFilmId
    }, {
      type: ActionType.GET_ACTIVE_FILM_ID,
      payload: activeFilmId
    })).toEqual({
      activeFilmId,
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
      payload: givenPromoMovie
    })).toEqual({
      promoMovie: givenPromoMovie,
    });
  });

  it(`Reducer should set error object by a given value`, () => {
    const {error} = initialState;

    expect(reducer({error}, {
      type: ActionType.SET_REVIEW_ERROR,
      payload: {error: `Error`}
    })).toEqual({error: {error: `Error`}});
  });

  it(`Action creator return correct action after change genre`, () => {
    expect(ActionCreator.changeGenre(GIVEN_GENRE)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: GIVEN_GENRE,
    });
  });

  it(`Action creator return correct action after call`, () => {
    expect(ActionCreator.setReviewError({error: {error: `error`}})).toEqual({
      type: ActionType.SET_REVIEW_ERROR,
      payload: {error: {error: `error`}},
    });
  });

  it(`Action creator return correct film id`, () => {
    expect(ActionCreator.getActiveFilmId(changedActiveFilmId)).toEqual({
      type: ActionType.GET_ACTIVE_FILM_ID,
      payload: changedActiveFilmId,
    });
  });

  it(`Action creator return correct film list`, () => {
    expect(ActionCreator.loadFilms(filmList)).toEqual({
      type: ActionType.LOAD_FILMS,
      payload: filmList,
    });
  });

  it(`Action creator return correct promo film`, () => {
    expect(ActionCreator.loadPromoFilm(givenPromoMovie)).toEqual({
      type: ActionType.LOAD_PROMO_FILM,
      payload: givenPromoMovie,
    });
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

  it(`Selector getMovieDetails return right key`, () => {
    expect(getActiveFilmId(state)).toEqual(changedActiveFilmId);
  });

  it(`Selector getMovieCover return right key`, () => {
    expect(getMovieCover(state)).toEqual(givenPromoMovie);
  });

  it(`Selector getActiveGenre return right key`, () => {
    expect(getActiveGenre(state)).toEqual(GIVEN_GENRE);
  });

  it(`Selector getReviewError return right key`, () => {
    expect(getReviewError(state)).toEqual({});
  });
});
