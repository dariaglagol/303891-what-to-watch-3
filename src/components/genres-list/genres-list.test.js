import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const defaultActiveGenre = {
  single: `All genres`,
  multiply: `All genres`
};

it(`Render genres list`, () => {
  const genresListComponent = renderer
    .create(
        <GenresList
          activeGenre={defaultActiveGenre}
          onGenreTabClick={() => {}}
        />
    ).toJSON();

  expect(genresListComponent).toMatchSnapshot();
});
