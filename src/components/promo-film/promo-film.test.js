import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film";

const MockFilmData = {
  name: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  released: `2020`,
  poster: `img/bohemian-rhapsody.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <PromoFilm
          promoMovie={MockFilmData}
          onFilmClick={() => {}}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
