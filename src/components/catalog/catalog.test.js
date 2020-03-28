import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

const MOCK_CATALOG_FILMS_LIST = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    name: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`,
    preview: `preview`
  },
  {
    name: `Macbeth`,
    poster: `img/macbeth.jpg`,
    genre: `Drama`,
    preview: `preview`
  },
  {
    name: `Aviator`,
    poster: `img/aviator.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    name: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`,
    preview: `preview`
  },
  {
    name: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Detective`,
    preview: `preview`
  },
  {
    name: `Revenant`,
    poster: `img/revenant.jpg`,
    genre: `Thriller`,
    preview: `preview`
  },
  {
    name: `Johnny English`,
    poster: `img/johnny-english.jpg`,
    genre: `Historical`,
    preview: `preview`
  }
];

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
};

const CURRENT_SHOWN_FILMS = 8;

it(`Render Catalog`, () => {
  const catalogComponent = renderer
    .create(
        <Catalog
          films={MOCK_CATALOG_FILMS_LIST}
          renderMovieList={() => {}}
          onGenreTabClick={() => {}}
          onShowMoreButtonClick={() => {}}
          activeGenre={DEFAULT_ACTIVE_GENRE}
          resetShownFilms={() => {}}
          currentShownFilms={CURRENT_SHOWN_FILMS}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogComponent).toMatchSnapshot();
});
