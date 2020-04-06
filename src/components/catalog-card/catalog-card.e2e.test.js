import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./calalog-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockedFilm = {
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
};

const mockedPlayProp = false;

const filmId = 1;

const mockHoverEvent = {};

it(`Hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={mockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        renderVideo={renderVideo}
        isPlaying={mockedPlayProp}
      />
  );

  filmCard.simulate(`mouseEnter`, mockHoverEvent);

  expect(filmCatalogCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(filmCatalogCardHoverHandler).toBeCalledWith(mockedFilm);
});

it(`Stop hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={mockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        renderVideo={renderVideo}
        isPlaying={mockedPlayProp}
      />
  );

  filmCard.simulate(`mouseLeave`, mockHoverEvent);

  expect(filmCatalogCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(filmCatalogCardHoverHandler).toBeCalledWith();
});

it(`Click on film card to change page`, () => {
  const onFilmHover = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={mockedFilm}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={mockedPlayProp}
      />
  );

  expect(
      filmCard
      .find(`Link`)
      .at(0).props().to
  ).toEqual(`/films/${filmId}`);
});
