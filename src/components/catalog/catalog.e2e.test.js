import React from "react";
import Enzyme, {mount} from "enzyme/";
import Adapter from "enzyme-adapter-react-16";
import Catalog from "./catalog";

Enzyme.configure({
  adapter: new Adapter(),
});

const MOCK_CATALOG_FILMS_LIST = [
  {
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    name: `Bohemian Rhapsody`,
    poster: `img/bohemian-rhapsody.jpg`,
    genre: `Horror`,
    preview: `preview`
  },
  {
    name: `Macbeth`,
    poster: `img/macbeth.jpg`,
    genre: `Drama`,
    preview: `preview`
  },
  {
    name: `Aviator`,
    poster: `img/aviator.jpg`,
    genre: `Comedy`,
    preview: `preview`
  },
  {
    name: `We need to talk about Kevin`,
    poster: `img/we-need-to-talk-about-kevin.jpg`,
    genre: `Science`,
    preview: `preview`
  },
  {
    name: `What We Do in the Shadows`,
    poster: `img/what-we-do-in-the-shadows.jpg`,
    genre: `Detective`,
    preview: `preview`
  },
  {
    name: `Revenant`,
    poster: `img/revenant.jpg`,
    genre: `Thriller`,
    preview: `preview`
  },
  {
    name: `Johnny English`,
    poster: `img/johnny-english.jpg`,
    genre: `Historical`,
    preview: `preview`
  }
];

const DEFAULT_ACTIVE_GENRE = {
  single: `All genres`,
  multiply: `All genres`
};

const CURRENT_SHOWN_FILMS = 8;

const ACTIVE_GENRE = {
  multiply: `Comedies`,
  single: `Comedy`,
};

it(`Genre tab call callback`, () => {
  const renderMovieList = jest.fn();
  const onGenreTabClick = jest.fn();
  const resetShownFilms = jest.fn();
  const showMoreButtonClickHandler = jest.fn();

  const catalogComponent = mount(
      <Catalog
        films={MOCK_CATALOG_FILMS_LIST}
        renderMovieList={renderMovieList}
        onGenreTabClick={onGenreTabClick}
        onShowMoreButtonClick={showMoreButtonClickHandler}
        activeGenre={DEFAULT_ACTIVE_GENRE}
        resetShownFilms={resetShownFilms}
        currentShownFilms={CURRENT_SHOWN_FILMS}
      />
  );

  const genreTab = catalogComponent.find(`.catalog__genres-item`).at(1);
  genreTab.simulate(`click`);

  expect(onGenreTabClick).toHaveBeenCalledTimes(1);
  expect(onGenreTabClick).toBeCalledWith(ACTIVE_GENRE);

  expect(resetShownFilms).toHaveBeenCalledTimes(1);
  expect(resetShownFilms).toBeCalledWith();
});
