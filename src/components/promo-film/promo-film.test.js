import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film";

const MockFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2020`
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <PromoFilm
          promoMovieCover={MockFilmData}
          onFilmClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
