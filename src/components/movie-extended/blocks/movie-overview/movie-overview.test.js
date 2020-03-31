import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";

const movieOverViewMock = {
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

it(`Movie overview render`, () => {
  const {director, starring, runTime, genre, released} = movieOverViewMock;

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
