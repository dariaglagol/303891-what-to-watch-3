import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

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
    director: ` director`,
    starring: [` starring`, `starring`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `videoLink`,
    previewVideoLink: `previewVideoLink`,
  },
  mockCatalogFilms: [
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
  activeFilmId: 0,
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  defaultActivePage: `main`,
  isFullscreenPlayerActive: false,
  userErrors: {},
  userData: {
    id: 1,
    email: `email`,
    name: `name`,
    avatarUrl: `avatarUrl`
  },
  authStatus: `NO_AUTH`,
  dataError: {}
};

it(`Render App`, () => {
  const {
    mockFilmData,
    authStatus,
    mockCatalogFilms,
    activeFilmId,
    defaultActiveGenre,
    defaultActivePage,
    isFullscreenPlayerActive,
    userErrors,
    userData,
    dataError
  } = mocks;

  const appComponent = renderer
    .create(
        <App
          promoMovie={mockFilmData}
          films={mockCatalogFilms}
          activeFilmId={activeFilmId}
          activeGenre={defaultActiveGenre}
          onGenreTabClick={() => {}}
          onPageChange={() => {}}
          onFullScreenToggle={() => {}}
          activePage={defaultActivePage}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          login={() => {}}
          authStatus={authStatus}
          userErrors={userErrors}
          userData={userData}
          addReview={() => {}}
          dataError={dataError}
        />
        , {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
