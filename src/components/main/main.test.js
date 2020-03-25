import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const MockFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2020`
};

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
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
  },
];

it(`Main component render`, () => {
  const mainComponent = renderer
    .create(
        <Main
          promoMovieCover={MockFilmData}
          films={MOCK_CATALOG_FILMS_LIST}
          onFilmClick={() => {}}
          renderCatalog={() => {}}
          activeGenre={DEFAULT_ACTIVE_GENRE}
          onGenreTabClick={() => {}}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(mainComponent).toMatchSnapshot();
});
