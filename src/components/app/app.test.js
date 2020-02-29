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
    posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`
  },
  {
    title: `Bohemian Rhapsody`,
    posterUrl: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`
  },
  {
    title: `Macbeth`,
    posterUrl: `img/macbeth.jpg`,
    genre: `Drama`
  },
  {
    title: `Aviator`,
    posterUrl: `img/aviator.jpg`,
    genre: `Comedy`
  },
  {
    title: `We need to talk about Kevin`,
    posterUrl: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`
  },
  {
    title: `What We Do in the Shadows`,
    posterUrl: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Detective`
  },
  {
    title: `Revenant`,
    posterUrl: `img/revenant.jpg`,
    genre: `Thriller`
  },
  {
    title: `Johnny English`,
    posterUrl: `img/johnny-english.jpg`,
    genre: `Historical`
  }
];

const MOCK_MOVIE_DETAILS = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  POSTER: `img/bg-the-grand-budapest-hotel.jpg`,
  RELEASE_DATE: `2020`,
  SCORE: 8.9,
  RATING: 124,
  DESCRIPTION: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
  DIRECTOR: `Wes Andreson`,
  STARRING: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`
};

it(`Render App`, () => {
  const appComponent = renderer
    .create(
        <App
          promoMovieCover={MockFilmData}
          films={MOCK_CATALOG_FILMS_LIST}
          movieDetails={MOCK_MOVIE_DETAILS}
        />
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
