import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import MoviesList from "./movies-list";
import history from "../../history.js";

const mock = {
  catalogFilmList: [
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
  mockedFilm: {
    name: `name`,
    genre: `genre`,
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
  },
  currentShownFilms: 8,
};

it(`Movie list render`, () => {
  const {mockedFilm, currentShownFilms, catalogFilmList} = mock;

  const moviesListComponent = renderer
    .create(
        <Router history={history}>
          <MoviesList
            films={catalogFilmList}
            onFilmCatalogCardHover={() => {}}
            activeFilm={mockedFilm}
            currentShownFilms={currentShownFilms}
          />
        </Router>, {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(moviesListComponent).toMatchSnapshot();
});
