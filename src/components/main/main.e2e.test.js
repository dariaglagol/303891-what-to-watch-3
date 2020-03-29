import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const Mocks = {
  mockFilmData: {
    name: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    released: `2020`,
    poster: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  mockedCatalogFilms: [
    {
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      genre: `Comedy`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      genre: `Horror`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `Macbeth`,
      poster: `img/macbeth.jpg`,
      genre: `Drama`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `Aviator`,
      poster: `img/aviator.jpg`,
      genre: `Comedy`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `We need to talk about Kevin`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
      genre: `Science`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `What We Do in the Shadows`,
      poster: `img/what-we-do-in-the-shadows.jpg`,
      genre: `Detective`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `Revenant`,
      poster: `img/revenant.jpg`,
      genre: `Thriller`,
      previewVideoLink: `previewVideoLink`,
    },
    {
      name: `Johnny English`,
      poster: `img/johnny-english.jpg`,
      genre: `Historical`,
      previewVideoLink: `previewVideoLink`,
    },
  ],
  isFullscreenPlayerActive: false,
};

it(`Click on play video button send callback with params`, () => {
  const {mockFilmData, defaultActiveGenre, mockedCatalogFilms, isFullscreenPlayerActive} = Mocks;
  const filmClickHandler = jest.fn();
  const renderCatalog = jest.fn();
  const genreTabClickHandler = jest.fn();
  const fullScreenToggleHandler = jest.fn();

  const mainComponent = mount(
      <Main
        promoMovie={mockFilmData}
        films={mockedCatalogFilms}
        onFilmClick={filmClickHandler}
        renderCatalog={renderCatalog}
        activeGenre={defaultActiveGenre}
        isFullscreenPlayerActive={isFullscreenPlayerActive}
        onFullScreenToggle={fullScreenToggleHandler}
        onGenreTabClick={genreTabClickHandler}
      />
  );

  const playButton = mainComponent.find(`.btn--play`);

  playButton.simulate(`click`);
  expect(fullScreenToggleHandler).toHaveBeenCalledTimes(1);
  expect(fullScreenToggleHandler).toBeCalledWith(true);
});
