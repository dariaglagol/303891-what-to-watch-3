import React from "react";
import Enzyme, {mount} from "enzyme/";
import Adapter from "enzyme-adapter-react-16";
import Catalog from "./catalog";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockedCatalogFilmList = [
  {
    name: `name`,
    genre: `Comedy`,
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
  }, {
    name: `name 2`,
    genre: `Comedy`,
    posterImage: `posterImage 2`,
    previewImage: `previewImage 2`,
    backgroundImage: `backgroundImage 2`,
    backgroundColor: `backgroundColor 2`,
    description: `description 2`,
    rating: 124,
    scoresCount: 8.9,
    director: `director 2`,
    starring: [`starring 2`, `starring 2`],
    runTime: 113,
    released: 2020,
    id: 2,
    isFavorite: false,
    videoLink: `videoLink 2`,
    previewVideoLink: `previewVideoLink 2`,
  },
];

const defaultActiveGenre = `All genres`;

const currentShownFilms = 8;

const activeGenre = `Comedy`;

it(`Genre tab call callback`, () => {
  const renderMovieList = jest.fn();
  const onGenreTabClick = jest.fn();
  const resetShownFilms = jest.fn();
  const showMoreButtonClickHandler = jest.fn();

  const catalogComponent = mount(
      <Catalog
        films={mockedCatalogFilmList}
        rawFilms={mockedCatalogFilmList}
        renderMovieList={renderMovieList}
        onGenreTabClick={onGenreTabClick}
        onShowMoreButtonClick={showMoreButtonClickHandler}
        activeGenre={defaultActiveGenre}
        resetShownFilms={resetShownFilms}
        currentShownFilms={currentShownFilms}
      />
  );

  const genreTab = catalogComponent.find(`.catalog__genres-item`).at(1);
  genreTab.simulate(`click`);

  expect(onGenreTabClick).toHaveBeenCalledTimes(1);
  expect(onGenreTabClick).toBeCalledWith(activeGenre);

  expect(resetShownFilms).toHaveBeenCalledTimes(1);
  expect(resetShownFilms).toBeCalledWith();
});
