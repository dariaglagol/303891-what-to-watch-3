import React from "react";
import {Router} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PromoFilm from "./promo-film";
import history from "../../history.js";

Enzyme.configure({
  adapter: new Adapter()
});

const mockFilmData = {
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
};

const userData = {
  id: 1,
  avatarUrl: `avatarUrl`,
  email: `email`,
  name: `name`,
};

// TODO toggleFilmFavorite

it(`Should header be clicked`, () => {
  const movieTitleClickHandler = jest.fn();
  const playButtonClickHandler = jest.fn();
  const signInClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = mount(
      <Router history={history}>
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          onSignInClick={signInClickHandler}
          onFilmClick={movieTitleClickHandler}
          authStatus={`NO_AUTH`}
          onPlayButtonClick={playButtonClickHandler}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </Router>
  );

  const movieCardTitle = movieCard.find(`.movie-card__title`);

  movieCardTitle.simulate(`click`);

  expect(movieTitleClickHandler.mock.calls.length).toBe(1);
  expect(history.location.pathname).toBe("/login");
});

it(`Should poster be clicked`, () => {
  const moviePosterClickHeader = jest.fn();
  const playButtonClickHandler = jest.fn();
  const signInClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = shallow(
      <PromoFilm
        promoMovie={mockFilmData}
        userData={userData}
        onSignInClick={signInClickHandler}
        onFilmClick={moviePosterClickHeader}
        authStatus={`NO_AUTH`}
        onPlayButtonClick={playButtonClickHandler}
      />
  );

  const movieCardTitle = movieCard.find(`.movie-card__poster`);

  movieCardTitle.simulate(`click`);

  expect(moviePosterClickHeader).toHaveBeenCalledTimes(1);
  expect(moviePosterClickHeader).toBeCalledWith(pageType);
});

it(`Click on play button calls callback to switch on video`, () => {
  const moviePosterClickHeader = jest.fn();
  const playButtonClickHandler = jest.fn();
  const signInClickHandler = jest.fn();

  const movieCard = shallow(
      <PromoFilm
        promoMovie={mockFilmData}
        userData={userData}
        onSignInClick={signInClickHandler}
        onFilmClick={moviePosterClickHeader}
        authStatus={`NO_AUTH`}
        onPlayButtonClick={playButtonClickHandler}
      />
  );

  const playButton = movieCard.find(`.btn--play`);

  playButton.simulate(`click`);

  expect(playButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(playButtonClickHandler).toBeCalledWith();
});
