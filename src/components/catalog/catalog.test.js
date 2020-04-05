import React from "react";
import renderer from "react-test-renderer";
import Catalog from "./catalog";

const mockedCatalogFilmList = [
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
];

const defaultActiveGenre = `All genres`;

const CURRENT_SHOWN_FILMS = 8;

it(`Render Catalog`, () => {
  const catalogComponent = renderer
    .create(
        <Catalog
          films={mockedCatalogFilmList}
          renderMovieList={() => {}}
          onGenreTabClick={() => {}}
          onShowMoreButtonClick={() => {}}
          activeGenre={defaultActiveGenre}
          resetShownFilms={() => {}}
          currentShownFilms={CURRENT_SHOWN_FILMS}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogComponent).toMatchSnapshot();
});
