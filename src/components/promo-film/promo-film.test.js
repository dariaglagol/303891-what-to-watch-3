import React from "react";
import renderer from "react-test-renderer";
import PromoFilm from "./promo-film";

const MockFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2020`,
  poster: `img/bohemian-rhapsody.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

it(`Movie card render`, () => {
  const movieCardComponent = renderer
    .create(
        <PromoFilm
          promoMovieCover={MockFilmData}
          onFilmClick={() => {}}
          onPlayButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(movieCardComponent).toMatchSnapshot();
});
