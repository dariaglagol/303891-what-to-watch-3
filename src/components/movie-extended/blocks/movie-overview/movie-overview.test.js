import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";

const MovieOverviewMock = {
  director: `director`,
  starring: `starring`,
  runTime: 113,
  genre: `genre`,
  releaseDate: `releaseDate`
};

it(`Movie overview render`, () => {
  const {director, starring, runTime, genre, releaseDate} = MovieOverviewMock;

  const movieOverviewComponent = renderer
    .create(
        <MovieOverview
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          releaseDate={releaseDate}
        />
    ).toJSON();

  expect(movieOverviewComponent).toMatchSnapshot();
});
