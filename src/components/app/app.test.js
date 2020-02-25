import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const MockFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE_DATE: `2020`
};

const MOCK_CATALOG_FILMS_LIST = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    posterUrl: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    posterUrl: `img/macbeth.jpg`
  },
  {
    title: `Aviator`,
    posterUrl: `img/aviator.jpg`
  },
  {
    title: `We need to talk about Kevin`,
    posterUrl: `img/we-need-to-talk-about-kevin.jpg`
  },
  {
    title: `What We Do in the Shadows`,
    posterUrl: `img/what-we-do-in-the-shadows.jpg`
  },
  {
    title: `Revenant`,
    posterUrl: `img/revenant.jpg`
  },
  {
    title: `Johnny English`,
    posterUrl: `img/johnny-english.jpg`
  },
];

it(`Render App`, () => {
  const appComponent = renderer
    .create(
        <App
          filmData={MockFilmData}
          films={MOCK_CATALOG_FILMS_LIST}
        />
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
