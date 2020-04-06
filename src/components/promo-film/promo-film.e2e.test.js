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

it(`Should header be clicked`, () => {
  const playButtonClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = mount(
      <Router history={history}>
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          authStatus={`NO_AUTH`}
          onPlayButtonClick={playButtonClickHandler}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </Router>
  );

  expect(
      movieCard
      .find(`Link`)
      .at(2).props().to
  ).toEqual(`/films/1`);
});

it(`Should poster be clicked`, () => {
  const playButtonClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = mount(
      <Router history={history}>
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          authStatus={`NO_AUTH`}
          onPlayButtonClick={playButtonClickHandler}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </Router>
  );

  expect(
      movieCard
      .find(`Link`)
      .at(3).props().to
  ).toEqual(`/films/1`);
});

it(`Click on play button calls callback to switch on video`, () => {
  const playButtonClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = mount(
      <Router history={history}>
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          authStatus={`NO_AUTH`}
          onPlayButtonClick={playButtonClickHandler}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </Router>
  );

  expect(
      movieCard
      .find(`Link`)
      .at(4).props().to
  ).toEqual(`/player/1`);
});

it(`Click on add to list button calls callback`, () => {
  const playButtonClickHandler = jest.fn();
  const toggleFilmFavorite = jest.fn();

  const movieCard = mount(
      <Router history={history}>
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          authStatus={`AUTH`}
          onPlayButtonClick={playButtonClickHandler}
          toggleFilmFavorite={toggleFilmFavorite}
        />
      </Router>
  );

  const promoMovieId = mockFilmData.id;
  const status = 1;

  const button = movieCard.find(`.btn--list`);
  button.simulate(`click`);
  expect(toggleFilmFavorite).toHaveBeenCalledTimes(1);
  expect(toggleFilmFavorite).toBeCalledWith(promoMovieId, status);
});
