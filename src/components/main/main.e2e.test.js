import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Click on play video button send callback with params`, () => {
  const {mockFilmData, defaultActiveGenre, mockedCatalogFilms, userData, isFullscreenPlayerActive} = mocks;
  const filmClickHandler = jest.fn();
  const renderCatalog = jest.fn();
  const genreTabClickHandler = jest.fn();
  const fullScreenToggleHandler = jest.fn();
  const signInClickHandler = jest.fn();

  const mainComponent = mount(
      <Main
        promoMovie={mockFilmData}
        films={mockedCatalogFilms}
        onFilmClick={filmClickHandler}
        renderCatalog={renderCatalog}
        activeGenre={defaultActiveGenre}
        userData={userData}
        isFullscreenPlayerActive={isFullscreenPlayerActive}
        onFullScreenToggle={fullScreenToggleHandler}
        onGenreTabClick={genreTabClickHandler}
        onSignInClick={signInClickHandler}
        authStatus={`NO_AUTH`}
      />
  );

  const playButton = mainComponent.find(`.btn--play`);

  playButton.simulate(`click`);
  expect(fullScreenToggleHandler).toHaveBeenCalledTimes(1);
  expect(fullScreenToggleHandler).toBeCalledWith(true);
});
