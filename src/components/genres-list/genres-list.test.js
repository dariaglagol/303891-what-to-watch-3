import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";

const genreList = new Set([`All genres`, `Genre`, `genre2`]);

const defaultActiveGenre = `All genres`;

it(`Render genres list`, () => {
  const genresListComponent = renderer
    .create(
        <GenresList
          activeGenre={defaultActiveGenre}
          genreList={genreList}
          onGenreTabClick={() => {}}
        />
    ).toJSON();

  expect(genresListComponent).toMatchSnapshot();
});
