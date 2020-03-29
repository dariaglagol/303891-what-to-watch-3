import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";

const Mocks = {
  mockFilmData: {
    name: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    released: `2020`,
    poster: `img/bohemian-rhapsody.jpg`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  mockCatalogFilms: [
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
    }
  ],
  mockMovieDetails: {
    name: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    released: `2020`,
    score: 8.9,
    rating: 124,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Anderson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    runTime: 113,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  defaultActivePage: `main`,
  isFullscreenPlayerActive: false,
};

it(`Render App`, () => {
  const {mockFilmData, mockCatalogFilms, mockMovieDetails, defaultActiveGenre, defaultActivePage, isFullscreenPlayerActive} = Mocks;
  const appComponent = renderer
    .create(
        <App
          promoMovie={mockFilmData}
          films={mockCatalogFilms}
          movieDetails={mockMovieDetails}
          activeGenre={defaultActiveGenre}
          onGenreTabClick={() => {}}
          onPageChange={() => {}}
          onFullScreenToggle={() => {}}
          activePage={defaultActivePage}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
        />
        , {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(appComponent).toMatchSnapshot();
});
