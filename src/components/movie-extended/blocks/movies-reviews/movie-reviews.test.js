import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movies-reviews";

const movieReviewsMock = [
  {
    comment: `text`,
    user: {
      name: `author`,
      id: 1
    },
    date: `2020-04-04T05:57:30.676Z`,
    rating: 8.9,
    id: 1
  }, {
    comment: `text`,
    user: {
      name: `author`,
      id: 4
    },
    date: `2020-04-03T05:57:30.676Z`,
    rating: 8.9,
    id: 3
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
