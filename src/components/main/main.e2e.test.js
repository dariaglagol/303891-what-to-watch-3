import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

const Mocks = {
  mockFilmData: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    releaseDate: `2020`,
    poster: `img/bohemian-rhapsody.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  mockedCatalogFilms: [
    {
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      genre: `Comedy`,
      preview: `preview`,
    },
    {
      title: `Bohemian Rhapsody`,
      poster: `img/bohemian-rhapsody.jpg`,
      genre: `Horror`,
      preview: `preview`,
    },
    {
      title: `Macbeth`,
      poster: `img/macbeth.jpg`,
      genre: `Drama`,
      preview: `preview`,
    },
    {
      title: `Aviator`,
      poster: `img/aviator.jpg`,
      genre: `Comedy`,
      preview: `preview`,
    },
    {
      title: `We need to talk about Kevin`,
      poster: `img/we-need-to-talk-about-kevin.jpg`,
      genre: `Science`,
      preview: `preview`,
    },
    {
      title: `What We Do in the Shadows`,
      poster: `img/what-we-do-in-the-shadows.jpg`,
      genre: `Detective`,
      preview: `preview`,
    },
    {
      title: `Revenant`,
      poster: `img/revenant.jpg`,
      genre: `Thriller`,
      preview: `preview`,
    },
    {
      title: `Johnny English`,
      poster: `img/johnny-english.jpg`,
      genre: `Historical`,
      preview: `preview`,
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
        promoMovieCover={mockFilmData}
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
