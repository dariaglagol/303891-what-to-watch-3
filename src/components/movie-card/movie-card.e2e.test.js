import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

const MockFilmData = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Comedy`,
  RELEASE_DATE: `2020`
};

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should header be clicked`, () => {
  const movieTitleClickHandler = jest.fn();

  const movieCard = shallow(
      <MovieCard
        promoMovieCover={MockFilmData}
        onPromoFilmClick={movieTitleClickHandler}
      />
  );

  const movieCardTitle = movieCard.find(`.movie-card__title`);

  movieCardTitle.simulate(`click`);

  expect(movieTitleClickHandler.mock.calls.length).toBe(1);
});

it(`Should poster be clicked`, () => {
  const moviePosterClickHeader = jest.fn();

  const movieCard = shallow(
      <MovieCard
        promoMovieCover={MockFilmData}
        onPromoFilmClick={moviePosterClickHeader}
      />
  );

  const movieCardTitle = movieCard.find(`.movie-card__poster`);

  movieCardTitle.simulate(`click`);

  expect(moviePosterClickHeader).toHaveBeenCalledTimes(1);
});
