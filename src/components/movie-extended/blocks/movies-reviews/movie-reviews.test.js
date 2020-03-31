import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movies-reviews";

const movieReviewsMock = [
  {
    text: `text`,
    author: `author`,
    date: `date`,
    rating: 8.9
  }, {
    text: `text`,
    author: `author`,
    date: `date`,
    rating: 8.0
  }
];

it(`Render movie reviews`, () => {
  const movieReviewsComponent = renderer
    .create(
        <MovieReviews
          reviews={movieReviewsMock}
        />
    ).toJSON();

  expect(movieReviewsComponent).toMatchSnapshot();
});
