import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list";

const MOCK_CATALOG_FILMS_LIST = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    previewVideoLink: `previewVideoLink`
  },
  {
    name: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`,
    previewVideoLink: `previewVideoLink`
  },
  {
    name: `Macbeth`,
    poster: `img/macbeth.jpg`,
    genre: `Drama`,
    previewVideoLink: `previewVideoLink`
  },
  {
    name: `Aviator`,
    poster: `img/aviator.jpg`,
    genre: `Comedy`,
    previewVideoLink: `previewVideoLink`
  },
  {
    name: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`,
    previewVideoLink: `previewVideoLink`
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

const MOCKED_FILM = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  preview: `preview`,
};

const CURRENT_SHOWN_FILMS = 8;

it(`Movie list render`, () => {
  const moviesListComponent = renderer
    .create(
        <MoviesList
          films={MOCK_CATALOG_FILMS_LIST}
          onFilmClick={() => {}}
          onFilmCatalogCardHover={() => {}}
          activeFilm={MOCKED_FILM}
          currentShownFilms={CURRENT_SHOWN_FILMS}
        />
        , {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(moviesListComponent).toMatchSnapshot();
});
