import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";

const MovieOverviewMock = {
  director: `director`,
  starring: `starring`,
  runTime: 113,
  genre: `genre`,
  released: `released`
};

it(`Movie overview render`, () => {
  const {director, starring, runTime, genre, released} = MovieOverviewMock;

  const movieOverviewComponent = renderer
    .create(
        <MovieOverview
          director={director}
          starring={starring}
          runTime={runTime}
          genre={genre}
          released={released}
        />
    ).toJSON();

  expect(movieOverviewComponent).toMatchSnapshot();
});
