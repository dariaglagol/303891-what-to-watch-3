import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
};

it(`Render genres list`, () => {
  const genresListComponent = renderer
    .create(
        <GenresList
          activeGenre={DEFAULT_ACTIVE_GENRE}
          onGenreTabClick={() => {}}
        />
    ).toJSON();

  expect(genresListComponent).toMatchSnapshot();
});
