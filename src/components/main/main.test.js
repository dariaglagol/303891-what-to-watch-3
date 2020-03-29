import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

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

it(`Main component render`, () => {
  const {mockFilmData, defaultActiveGenre, mockedCatalogFilms, isFullscreenPlayerActive} = Mocks;

  const mainComponent = renderer
    .create(
        <Main
          promoMovie={mockFilmData}
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
