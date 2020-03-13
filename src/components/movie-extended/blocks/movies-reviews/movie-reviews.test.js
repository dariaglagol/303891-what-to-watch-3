import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movies-reviews";

const MovieReviewsMock = [
  {
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
    rating: 8.9
  }, {
    text: `Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight. &quot;The Grand Budapest Hotel&quot; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
    rating: 8.0
  }
];

it(`Render movie reviews`, () => {
  const movieReviewsComponent = renderer
    .create(
        <MovieReviews
          reviews={MovieReviewsMock}
        />
    ).toJSON();

  expect(movieReviewsComponent).toMatchSnapshot();
});
