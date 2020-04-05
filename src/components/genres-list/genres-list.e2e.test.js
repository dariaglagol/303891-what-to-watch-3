import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list";

Enzyme.configure({
  adapter: new Adapter(),
});
const activeGenre = `Genre`;

const genreList = [`All genres`, `Genre`, `genre2`];

const defaultActiveGenre = `All genres`;

it(`Click to genre tab`, () => {
  const genreTabClickHandler = jest.fn();

  const genreListComponent = shallow(
      <GenresList
        genreList={genreList}
        activeGenre={defaultActiveGenre}
        onGenreTabClick={genreTabClickHandler}
      />
  );

  const genreTabItem = genreListComponent.find(`.catalog__genres-item`).at(1);

  genreTabItem.simulate(`click`);

  expect(genreTabClickHandler).toHaveBeenCalledTimes(1);
  expect(genreTabClickHandler).toBeCalledWith(activeGenre);
});
