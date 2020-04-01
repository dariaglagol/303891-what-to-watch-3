import React from "react";
import Enzyme, {shallow} from "enzyme";
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
    starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
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
  pageType: `review`
};

const mockedSubmitEvent = {
  preventDefault() {}
};

it(`Press on play button call full screen player`, () => {
  const {movieDetails, userData, mockCatalogFilms, activeTab, isFullscreenPlayerActive} = mocks;

  const signInClickHandler = jest.fn();
  const filmClickHandler = jest.fn();
  const fullScreenClickHandler = jest.fn();
  const addReviewClickHandler = jest.fn();
  const renderTabs = jest.fn();
  const renderMovieList = jest.fn();

  const movieExtendedComponent = shallow(
      <MovieExtended
        movieDetails={movieDetails}
        userData={userData}
        films={mockCatalogFilms}
        activeTab={activeTab}
        isFullscreenPlayerActive={isFullscreenPlayerActive}
        authStatus={`NO_AUTH`}
        onSignInClick={signInClickHandler}
        renderTabs={renderTabs}
        onFilmClick={filmClickHandler}
        onFullScreenToggle={fullScreenClickHandler}
        renderMovieList={renderMovieList}
        onAddReviewClick={addReviewClickHandler}
      />
  );

  const playButton = movieExtendedComponent.find(`.btn--play`);
  playButton.simulate(`click`);

  expect(fullScreenClickHandler).toHaveBeenCalledTimes(1);
  expect(fullScreenClickHandler).toBeCalledWith(!isFullscreenPlayerActive);
});

it(`Press on review button call callback`, () => {
  const {movieDetails, pageType, userData, mockCatalogFilms, activeTab, isFullscreenPlayerActive} = mocks;

  const signInClickHandler = jest.fn();
  const filmClickHandler = jest.fn();
  const fullScreenClickHandler = jest.fn();
  const addReviewClickHandler = jest.fn();
  const renderTabs = jest.fn();
  const renderMovieList = jest.fn();

  const movieExtendedComponent = shallow(
      <MovieExtended
        movieDetails={movieDetails}
        userData={userData}
        films={mockCatalogFilms}
        activeTab={activeTab}
        isFullscreenPlayerActive={isFullscreenPlayerActive}
        authStatus={`AUTH`}
        onSignInClick={signInClickHandler}
        renderTabs={renderTabs}
        onFilmClick={filmClickHandler}
        onFullScreenToggle={fullScreenClickHandler}
        renderMovieList={renderMovieList}
        onAddReviewClick={addReviewClickHandler}
      />
  );

  const reviewButton = movieExtendedComponent.find(`.movie-card__button`).at(2);
  reviewButton.simulate(`click`, mockedSubmitEvent);

  expect(addReviewClickHandler).toHaveBeenCalledTimes(1);
  expect(addReviewClickHandler).toBeCalledWith(pageType);
});
