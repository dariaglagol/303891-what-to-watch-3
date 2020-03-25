import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./calalog-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockedFilm = {
  title: `title`,
  posterUrl: `url`,
  genre: `genre`,
  preview: `preview`,
};

const MOCKED_PLAY_PROP = false;

const PAGE_TYPE = `movie`;

const mockHoverEvent = {};

it(`Hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = mount(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
      />
  );

  filmCard.simulate(`mouseEnter`, mockHoverEvent);

  expect(filmCatalogCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(filmCatalogCardHoverHandler).toBeCalledWith(MockedFilm);
});

it(`Stop hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = mount(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
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

  const filmCard = mount(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
      />
  );

  filmCard.simulate(`click`);

  expect(onFilmClick.mock.calls.length).toBe(1);
  expect(onFilmClick).toBeCalledWith(PAGE_TYPE);
});
