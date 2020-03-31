import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";

const movieDetailsMock = {
  name: `givenPromoMovie name`,
  genre: `givenPromoMovie genre`,
  posterImage: `givenPromoMovie posterImage`,
  previewImage: `givenPromoMovie previewImage`,
  backgroundImage: `givenPromoMovie backgroundImage`,
  backgroundColor: `givenPromoMovie backgroundColor`,
  description: `givenPromoMovie description`,
  rating: 124,
  scoresCount: 8.9,
  director: ` givenPromoMovie director`,
  starring: [` givenPromoMovie starring`, `givenPromoMovie starring`],
  runTime: 113,
  released: 2020,
  id: 1,
  isFavorite: false,
  videoLink: `givenPromoMovie videoLink`,
  previewVideoLink: `givenPromoMovie previewVideoLink`,
};

it(`Render movie details`, () => {
  const {description, director, starring, scoresCount, rating} = movieDetailsMock;
  const movieDetailsComponent = renderer
    .create(
        <MovieDetails
          description={description}
          director={director}
          starring={starring}
          scoresCount={scoresCount}
          rating={rating}
        />
    ).toJSON();

  expect(movieDetailsComponent).toMatchSnapshot();
});
