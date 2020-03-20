import {reducer, ActionCreator, ActionType} from "./reducer";
import {DEFAULT_ACTIVE_GENRE} from "@utils/constants";

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  },
  {
    title: `Bohemian Rhapsody`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Horror`
  },
  {
    title: `Macbeth`,
    posterUrl: `img/macbeth.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Drama`
  },
  {
    title: `Aviator`,
    posterUrl: `img/aviator.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedy`
  },
  {
    title: `We need to talk about Kevin`,
    posterUrl: `img/we-need-to-talk-about-kevin.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Science`
  },
  {
    title: `What We Do in the Shadows`,
    posterUrl: `img/what-we-do-in-the-shadows.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Detective`
  },
  {
    title: `Revenant`,
    posterUrl: `img/revenant.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Thriller`
  },
  {
    title: `Johnny English`,
    posterUrl: `img/johnny-english.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Historical`
  },
];

const filteredFilms = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    genre: `Comedy`
  },
  {
    title: `Aviator`,
    posterUrl: `img/aviator.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    genre: `Comedy`
  },
];

const GIVEN_GENRE = `Comedies`;

describe(`Reducer tests`, () => {
  it(`Reducer without params should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      films,
      activeGenre: DEFAULT_ACTIVE_GENRE,
      promoMovieCover: {
        TITLE: `The Grand Budapest Hotel`,
        GENRE: `Comedy`,
        RELEASE_DATE: `2020`
      }
    });
  });

  it(`Reducer should change current genre by a given value`, () => {
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

  it(`Action creator return correct action after change genre`, () => {
    expect(ActionCreator.changeGenre(GIVEN_GENRE)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: GIVEN_GENRE,
    });
  });

  it(`Action creator return correct film list after change genre`, () => {
    expect(ActionCreator.getMoviesByGenre(`Comedy`)).toEqual({
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
});
