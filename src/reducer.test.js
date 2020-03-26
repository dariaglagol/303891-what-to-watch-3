import {reducer, ActionCreator, ActionType} from "./reducer";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const filteredFilms = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  },
  {
    title: `Aviator`,
    poster: `img/aviator.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedy`
  },
];

const GIVEN_GENRE = {
  multiply: `Comedies`,
  single: `Comedy`,
};

const InitialState = {
  films: [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Comedy`
    },
    {
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Horror`
    },
    {
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Drama`
    },
    {
      title: `Aviator`,
      poster: `img/aviator.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Comedy`
    },
    {
      title: `We need to talk about Kevin`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Science`
    },
    {
      title: `What We Do in the Shadows`,
      poster: `img/what-we-do-in-the-shadows.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Detective`
    },
    {
      title: `Revenant`,
      poster: `img/revenant.jpg`,
      preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
      genre: `Thriller`
    },
    {
      title: `Johnny English`,
      poster: `img/johnny-english.jpg`,
      preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      genre: `Historical`
    },
  ],
  activeGenre: DEFAULT_ACTIVE_GENRE,
  promoMovieCover: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    releaseDate: `2020`,
    poster: `img/bohemian-rhapsody.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  movieDetails: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    releaseDate: `2020`,
    score: 8.9,
    rating: 124,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    runTime: 113,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
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
  activePage: `main`,
  isFullscreenPlayerActive: false,
};

describe(`Reducer tests`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(InitialState);
  });

  it(`Reducer should change current genre by a given value`, () => {
    const {films} = InitialState;

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

  it(`Reducer should change current films list by a given value`, () => {
    const {films} = InitialState;

    expect(reducer({
      films,
      activeGenre: DEFAULT_ACTIVE_GENRE,
    }, {
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filteredFilms
    })).toEqual({
      activeGenre: DEFAULT_ACTIVE_GENRE,
      films: filteredFilms,
    });
  });

  it(`Reducer should change current page list by a given value`, () => {
    const {activePage} = InitialState;

    expect(reducer({
      activePage
    }, {
      type: ActionType.GET_ACTIVE_PAGE,
      payload: `movie`
    })).toEqual({
      activePage: `movie`
    });
  });

  it(`Reducer should toggle fullscreen player`, () => {
    const {isFullscreenPlayerActive} = InitialState;

    expect(reducer({
      isFullscreenPlayerActive
    }, {
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    })).toEqual({
      isFullscreenPlayerActive: true,
    });
  });

  it(`Action creator return correct action after change genre`, () => {
    expect(ActionCreator.changeGenre(GIVEN_GENRE)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: GIVEN_GENRE,
    });
  });

  it(`Action creator return correct film list after change genre`, () => {
    expect(ActionCreator.getMoviesByGenre({
      single: `Comedy`,
      multiply: `Comedies`,
    })).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: filteredFilms,
    });
  });

  it(`Action creator return empty array film list after change  empty genre`, () => {
    expect(ActionCreator.getMoviesByGenre(`Genre`)).toEqual({
      type: ActionType.GET_MOVIES_BY_GENRE,
      payload: [],
    });
  });

  it(`Action creator return correct page after change`, () => {
    expect(ActionCreator.getActivePage(`movie`)).toEqual({
      type: ActionType.GET_ACTIVE_PAGE,
      payload: `movie`,
    });
  });

  it(`Action creator return correct value after toggle fullscreen player`, () => {
    expect(ActionCreator.toggleFullscreenPlayer(true)).toEqual({
      type: ActionType.TOGGLE_FULLSCREEN_PLAYER,
      payload: true
    });
  });
});
