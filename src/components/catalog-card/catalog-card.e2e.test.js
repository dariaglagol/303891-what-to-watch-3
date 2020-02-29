import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./calalog-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const MOCK = {
  film: {
    title: `title`,
    posterUrl: `url`,
    genre: `genre`
  }
};

const mockHoverEvent = {};

it(`Hover on film card, film's info should pass to callback`, () => {
  const {film} = MOCK;
  const onFilmHover = jest.fn();
  const onFilmClick = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={film}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
      />
  );

  filmCard.simulate(`mouseEnter`, mockHoverEvent);

  expect(onFilmHover).toHaveBeenCalledTimes(1);
  expect(onFilmHover).toBeCalledWith(film);
});
