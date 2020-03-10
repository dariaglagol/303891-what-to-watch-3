import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

it(`Render genres list`, () => {
  const genresListComponent = renderer
    .create(
        <GenresList />
    ).toJSON();

  expect(genresListComponent).toMatchSnapshot();
});
