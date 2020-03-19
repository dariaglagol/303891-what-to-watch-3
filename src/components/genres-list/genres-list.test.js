import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const ACTIVE_GENRE = `Comedies`;

it(`Render genres list`, () => {
  const genresListComponent = renderer
    .create(
        <GenresList
          activeGenre={ACTIVE_GENRE}
          onGenreTabClick={() => {}}
        />
    ).toJSON();

  expect(genresListComponent).toMatchSnapshot();
});
