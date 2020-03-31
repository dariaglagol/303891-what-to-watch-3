import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film";

const mockFilmData = {
  name: `name`,
  genre: `genre`,
  posterImage: `posterImage`,
  previewImage: `previewImage`,
  backgroundImage: `backgroundImage`,
  backgroundColor: `backgroundColor`,
  description: `description`,
  rating: 124,
  scoresCount: 8.9,
  director: `director`,
  starring: [`starring`, `starring`],
  runTime: 113,
  released: 2020,
  id: 1,
  isFavorite: false,
  videoLink: `videoLink`,
  previewVideoLink: `previewVideoLink`,
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <PromoFilm
          promoMovie={mockFilmData}
          onFilmClick={() => {}}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
