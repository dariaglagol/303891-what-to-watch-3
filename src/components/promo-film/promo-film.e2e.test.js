import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PromoFilm from "./promo-film";

Enzyme.configure({
  adapter: new Adapter()
});

const MockFilmData = {
  title: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  releaseDate: `2020`,
  poster: `img/bohemian-rhapsody.jpg`,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
};

const PAGE_TYPE = `movie`;

it(`Should header be clicked`, () => {
  const movieTitleClickHandler = jest.fn();
  const playButtonClickHandler = jest.fn();

  const movieCard = shallow(
      <PromoFilm
        promoMovieCover={MockFilmData}
        onFilmClick={movieTitleClickHandler}
        onPlayButtonClick={playButtonClickHandler}
      />
  );

  const movieCardTitle = movieCard.find(`.movie-card__title`);

  movieCardTitle.simulate(`click`);

  expect(movieTitleClickHandler.mock.calls.length).toBe(1);
  expect(movieTitleClickHandler).toBeCalledWith(PAGE_TYPE);
});

it(`Should poster be clicked`, () => {
  const moviePosterClickHeader = jest.fn();
  const playButtonClickHandler = jest.fn();

  const movieCard = shallow(
      <PromoFilm
        promoMovieCover={MockFilmData}
        onFilmClick={moviePosterClickHeader}
        onPlayButtonClick={playButtonClickHandler}
      />
  );

  const movieCardTitle = movieCard.find(`.movie-card__poster`);

  movieCardTitle.simulate(`click`);

  expect(moviePosterClickHeader).toHaveBeenCalledTimes(1);
  expect(moviePosterClickHeader).toBeCalledWith(PAGE_TYPE);
});

it(`Click on play button calls callback to switch on video`, () => {
  const moviePosterClickHeader = jest.fn();
  const playButtonClickHandler = jest.fn();

  const movieCard = shallow(
      <PromoFilm
        promoMovieCover={MockFilmData}
        onFilmClick={moviePosterClickHeader}
        onPlayButtonClick={playButtonClickHandler}
      />
  );

  const playButton = movieCard.find(`.btn--play`);

  playButton.simulate(`click`);

  expect(playButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(playButtonClickHandler).toBeCalledWith();
});
