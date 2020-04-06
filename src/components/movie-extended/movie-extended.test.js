import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import MovieExtended from "./movie-extended";
import history from "../../history";

const mocks = {
  movieDetails: {
    name: `givenPromoMovie name`,
    genre: `givenPromoMovie genre`,
    posterImage: `givenPromoMovie posterImage`,
    previewImage: `givenPromoMovie previewImage`,
    backgroundImage: `givenPromoMovie backgroundImage`,
    backgroundColor: `givenPromoMovie backgroundColor`,
    description: `givenPromoMovie description`,
    rating: 124,
    scoresCount: 8.9,
    director: ` givenPromoMovie director`,
    starring: [` givenPromoMovie starring`, `givenPromoMovie starring2`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `givenPromoMovie videoLink`,
    previewVideoLink: `givenPromoMovie previewVideoLink`,
  },
  userData: {
    id: 1,
    email: `email`,
    name: `name`,
    avatarUrl: `avatarUrl`
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
      starring: [`starring`, `starring 3`],
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
      starring: [`starring 2`, `starring 4`],
      runTime: 113,
      released: 2020,
      id: 2,
      isFavorite: false,
      videoLink: `videoLink 2`,
      previewVideoLink: `previewVideoLink 2`,
    },
  ],
  activeTab: `Overview`,
  isFullscreenPlayerActive: false,
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
  ],
  match: {
    params: {
      id: `1`
    }
  }
};

it(`Movie details render with NO_AUTH status`, () => {
  const {movieDetails, match, mockCatalogFilms, userData, activeTab, isFullscreenPlayerActive} = mocks;
  const movieExtendedComponent = renderer
    .create(
        <Router history={history}>
          <MovieExtended
            movieDetails={movieDetails}
            films={mockCatalogFilms}
            renderTabs={() => {}}
            onFilmLoad={() => {}}
            renderMovieList={() => {}}
            activeTab={activeTab}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={() => {}}
            userData={userData}
            onSignInClick={() => {}}
            authStatus={`NO_AUTH`}
            match={match}
            toggleFilmFavorite={() => {}}
          />
        </Router>, {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(movieExtendedComponent).toMatchSnapshot();
});

it(`Movie details render with AUTH status`, () => {
  const {movieDetails, match, mockCatalogFilms, userData, activeTab, isFullscreenPlayerActive} = mocks;
  const movieExtendedComponent = renderer
    .create(
        <Router history={history}>
          <MovieExtended
            movieDetails={movieDetails}
            films={mockCatalogFilms}
            renderTabs={() => {}}
            onFilmLoad={() => {}}
            renderMovieList={() => {}}
            activeTab={activeTab}
            isFullscreenPlayerActive={isFullscreenPlayerActive}
            onFullScreenToggle={() => {}}
            userData={userData}
            onSignInClick={() => {}}
            authStatus={`NO_AUTH`}
            match={match}
            toggleFilmFavorite={() => {}}
          />
        </Router>, {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(movieExtendedComponent).toMatchSnapshot();
});
