import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const MockFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2020`
};

const MOCK_CATALOG_FILMS_LIST = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    preview: `preview`,

  },
  {
    title: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`,
    preview: `preview`,
  },
  {
    title: `Macbeth`,
    poster: `img/macbeth.jpg`,
    genre: `Drama`,
    preview: `preview`,
  },
  {
    title: `Aviator`,
    poster: `img/aviator.jpg`,
    genre: `Comedy`,
    preview: `preview`,
  },
  {
    title: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`,
    preview: `preview`,
  },
  {
    title: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Detective`,
    preview: `preview`,
  },
  {
    title: `Revenant`,
    poster: `img/revenant.jpg`,
    genre: `Thriller`,
    preview: `preview`,
  },
  {
    title: `Johnny English`,
    poster: `img/johnny-english.jpg`,
    genre: `Historical`,
    preview: `preview`,
  }
];

const MOCK_MOVIE_DETAILS = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  poster: `img/bg-the-grand-budapest-hotel.jpg`,
  releaseDate: `2020`,
  score: 8.9,
  rating: 124,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  director: `Wes Anderson`,
  starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
  runTime: 113,
};

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
};

const ACTIVE_PAGE = `main`;

it(`Render App`, () => {
  const appComponent = renderer
    .create(
        <App
          promoMovieCover={MockFilmData}
          films={MOCK_CATALOG_FILMS_LIST}
          movieDetails={MOCK_MOVIE_DETAILS}
          activeGenre={DEFAULT_ACTIVE_GENRE}
          onGenreTabClick={() => {}}
          onPageChange={() => {}}
          activePage={ACTIVE_PAGE}
        />
        , {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
