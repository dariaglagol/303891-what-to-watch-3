import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list";

Enzyme.configure({
  adapter: new Adapter(),
});

const defaultActiveGenre = {
  single: `All genres`,
  multiply: `All genres`
};

const activeGenre = {
  multiply: `Comedies`,
  single: `Comedy`,
};

it(`Click to genre tab`, () => {
  const genreTabClickHandler = jest.fn();

  const genreList = shallow(
      <GenresList
        activeGenre={defaultActiveGenre}
        onGenreTabClick={genreTabClickHandler}
      />
  );

  const genreTabItem = genreList.find(`.catalog__genres-item`).at(1);

  genreTabItem.simulate(`click`);

  expect(genreTabClickHandler).toHaveBeenCalledTimes(1);
  expect(genreTabClickHandler).toBeCalledWith(activeGenre);
});
