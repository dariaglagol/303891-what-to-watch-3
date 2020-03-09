import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

const MOCK_CATALOG_FILMS_LIST = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    title: `Bohemian Rhapsody`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`,
    preview: `preview`
  },
  {
    title: `Macbeth`,
    posterUrl: `img/macbeth.jpg`,
    genre: `Drama`,
    preview: `preview`
  },
  {
    title: `Aviator`,
    posterUrl: `img/aviator.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    title: `We need to talk about Kevin`,
    posterUrl: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`,
    preview: `preview`
  },
  {
    title: `What We Do in the Shadows`,
    posterUrl: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Detective`,
    preview: `preview`
  },
  {
    title: `Revenant`,
    posterUrl: `img/revenant.jpg`,
    genre: `Thriller`,
    preview: `preview`
  },
  {
    title: `Johnny English`,
    posterUrl: `img/johnny-english.jpg`,
    genre: `Historical`,
    preview: `preview`
  }
];

it(`Render Catalog`, () => {
  const catalogComponent = renderer
    .create(
        <Catalog
          films={MOCK_CATALOG_FILMS_LIST}
          onFilmClick={() => {}}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogComponent).toMatchSnapshot();
});
