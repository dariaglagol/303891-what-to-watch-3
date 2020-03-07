import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./calalog-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockedFilm = {
  title: `title`,
  posterUrl: `url`,
  genre: `genre`
};

const PAGE_TYPE = `movie`;

const mockHoverEvent = {};

it(`Hover on film card, film's info should pass to callback`, () => {
  const onFilmHover = jest.fn();
  const onFilmClick = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
      />
  );

  filmCard.simulate(`mouseEnter`, mockHoverEvent);

  expect(onFilmHover).toHaveBeenCalledTimes(1);
  expect(onFilmHover).toBeCalledWith(MockedFilm);
});

it(`Click on film card to change page`, () => {
  const onFilmHover = jest.fn();
  const onFilmClick = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
      />
  );

  filmCard.simulate(`click`);

  expect(onFilmClick.mock.calls.length).toBe(1);
  expect(onFilmClick).toBeCalledWith(PAGE_TYPE);
});
