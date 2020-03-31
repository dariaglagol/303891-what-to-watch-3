import React from "react";
import renderer from "react-test-renderer";
import MovieExtended from "./movie-extended";

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
    starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
    runTime: 113,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `givenPromoMovie videoLink`,
    previewVideoLink: `givenPromoMovie previewVideoLink`,
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
  activeTab: `Overview`,
  isFullscreenPlayerActive: false,
};

it(`Movie details render`, () => {
  const {movieDetails, mockCatalogFilms, activeTab, isFullscreenPlayerActive} = mocks;
  const movieExtendedComponent = renderer
    .create(
        <MovieExtended
          movieDetails={movieDetails}
          films={mockCatalogFilms}
          renderTabs={() => {}}
          onFilmClick={() => {}}
          onFullScreenToggle={() => {}}
          renderMovieList={() => {}}
          activeTab={activeTab}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
        />, {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(movieExtendedComponent).toMatchSnapshot();
});
