import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";

const MovieDetailsMock = {
  description: `description`,
  director: `director`,
  starring: `starring`,
  score: 8.0,
  rating: 8.0,
};

it(`Render movie details`, () => {
  const {description, director, starring, score, rating} = MovieDetailsMock;
  const movieDetailsComponent = renderer
    .create(
        <MovieDetails
          description={description}
          director={director}
          starring={starring}
          score={score}
          rating={rating}
        />
    ).toJSON();

  expect(movieDetailsComponent).toMatchSnapshot();
});
