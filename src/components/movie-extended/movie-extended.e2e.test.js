import React from "react";
import Enzyme, {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import MovieExtended from "./movie-extended";

Enzyme.configure({
  adapter: new Adapter(),
});

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
    starring: [` givenPromoMovie starring`, `givenPromoMovie starring 2`],
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
      starring: [`starring`, `starring 1`],
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
      starring: [`starring 2`, `starring 3`],
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
  match: {
    params: {
      id: `2`
    }
  }
};

it(`Press on play button call full screen player`, () => {
  const {movieDetails, userData, mockCatalogFilms, match, activeTab, isFullscreenPlayerActive} = mocks;

  const signInClickHandler = jest.fn();
  const filmClickHandler = jest.fn();
  const fullScreenClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();
  const renderTabs = jest.fn();
  const renderMovieList = jest.fn();

  const movieExtendedComponent = mount(
      <MemoryRouter>
        <MovieExtended
          movieDetails={movieDetails}
          films={mockCatalogFilms}
          renderTabs={renderTabs}
          onFilmLoad={filmClickHandler}
          renderMovieList={renderMovieList}
          activeTab={activeTab}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={fullScreenClickHandler}
          userData={userData}
          onSignInClick={signInClickHandler}
          authStatus={`NO_AUTH`}
          match={match}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </MemoryRouter>
  );

  expect(
      movieExtendedComponent
      .find(`Link`)
      .at(2).props().to
  ).toEqual(`/player/2`);
});

it(`Press on review button call callback`, () => {
  const {movieDetails, userData, mockCatalogFilms, match, activeTab, isFullscreenPlayerActive} = mocks;

  const signInClickHandler = jest.fn();
  const filmClickHandler = jest.fn();
  const fullScreenClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();
  const renderTabs = jest.fn();
  const renderMovieList = jest.fn();

  const movieExtendedComponent = mount(
      <MemoryRouter>
        <MovieExtended
          movieDetails={movieDetails}
          films={mockCatalogFilms}
          renderTabs={renderTabs}
          onFilmLoad={filmClickHandler}
          renderMovieList={renderMovieList}
          activeTab={activeTab}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={fullScreenClickHandler}
          userData={userData}
          onSignInClick={signInClickHandler}
          authStatus={`AUTH`}
          match={match}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </MemoryRouter>
  );

  expect(
      movieExtendedComponent
      .find(`Link`)
      .at(3).props().to
  ).toEqual(`/films/2/review`);
});
