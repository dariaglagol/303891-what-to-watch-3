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

const userData = {
  id: 1,
  avatarUrl: `avatarUrl`,
  email: `email`,
  name: `name`,
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <PromoFilm
          promoMovie={mockFilmData}
          userData={userData}
          onFilmClick={() => {}}
          onSignInClick={() => {}}
          authStatus={`NO_AUTH`}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
