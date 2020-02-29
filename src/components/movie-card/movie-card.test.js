import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";

const MockFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE_DATE: `2020`
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <MovieCard
          promoMovieCover={MockFilmData}
          onTitleClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
