import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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

it(`Main component render`, () => {
  const {mockFilmData, defaultActiveGenre, mockedCatalogFilms, isFullscreenPlayerActive} = Mocks;

  const mainComponent = renderer
    .create(
        <Main
          promoMovieCover={mockFilmData}
          films={mockedCatalogFilms}
          onFilmClick={() => {}}
          renderCatalog={() => {}}
          activeGenre={defaultActiveGenre}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onFullScreenToggle={() => {}}
          onGenreTabClick={() => {}}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(mainComponent).toMatchSnapshot();
});
