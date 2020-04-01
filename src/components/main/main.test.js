import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const mocks = {
  mockFilmData: {
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
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  mockedCatalogFilms: [
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
  isFullscreenPlayerActive: false,
  userData: {
    id: 1,
    email: `email`,
    name: `name`,
    avatarUrl: `avatarUrl`
  },
};

it(`Main component render`, () => {
  const {mockFilmData, defaultActiveGenre, userData, mockedCatalogFilms, isFullscreenPlayerActive} = mocks;

  const mainComponent = renderer
    .create(
        <Main
          promoMovie={mockFilmData}
          films={mockedCatalogFilms}
          onFilmClick={() => {}}
          renderCatalog={() => {}}
          activeGenre={defaultActiveGenre}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={() => {}}
          onGenreTabClick={() => {}}
          userData={userData}
          authStatus={`NO_AUTH`}
          onSignInClick={() => {}}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(mainComponent).toMatchSnapshot();
});
