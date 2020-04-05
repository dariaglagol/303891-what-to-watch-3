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
  defaultActiveGenre: `All genres`,
  defaultActivePage: `main`,
  isFullscreenPlayerActive: false,
  userData: {
    id: 1,
    email: `email`,
    name: `name`,
    avatarUrl: `avatarUrl`
  },
  authStatus: `NO_AUTH`,
  error: {},
  isLoading: false,
  reviews: [
    {comment: `text`,
      user: {name: `author`, id: 1},
      date: `2020-04-04T05:57:30.676Z`,
      rating: 8.9,
      id: 1
    }, {
      comment: `text`,
      user: {name: `author`, id: 4},
      date: `2020-04-03T05:57:30.676Z`,
      rating: 8.9,
      id: 3
    }
  ]
};

it(`Render App`, () => {
  const {
    mockFilmData,
    authStatus,
    mockCatalogFilms,
    defaultActiveGenre,
    isFullscreenPlayerActive,
    userData,
    error,
    isLoading,
    reviews
  } = mocks;

  const appComponent = renderer
    .create(
        <App
          filteredFilms={mockCatalogFilms}
          promoMovie={mockFilmData}
          films={mockCatalogFilms}
          reviews={reviews}
          activeGenre={defaultActiveGenre}
          onGenreTabClick={() => {}}
          onFilmLoad={() => {}}
          toggleFilmFavorite={() => {}}
          onFullScreenToggle={() => {}}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          authStatus={authStatus}
          userData={userData}
          login={() => {}}
          sendReview={() => {}}
          error={error}
          isDataLoading={isLoading}
          isSignInLoading={isLoading}
          commentFormSendingResult={true}
          authFormSendingResult={true}
        />
        , {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
