import React from "react";
import renderer from "react-test-renderer";
import MovieExtended from "./movie-extended";

const Mocks = {
  movieDetails: {
    name: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    poster: `img/bg-the-grand-budapest-hotel.jpg`,
    releaseDate: `2020`,
    score: 8.9,
    rating: 124,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Anderson`,
    starring: `Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other`,
    runTime: 113,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  mockCatalogFilms: [
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
  ],
  activeTab: `Overview`,
  isFullscreenPlayerActive: false,
};

it(`Movie details render`, () => {
  const {movieDetails, mockCatalogFilms, activeTab, isFullscreenPlayerActive} = Mocks;
  const movieExtendedComponent = renderer
    .create(
        <MovieExtended
          movieDetails={movieDetails}
          films={mockCatalogFilms}
          renderTabs={() => {}}
          onFilmClick={() => {}}
          onFullScreenToggle={() => {}}
          renderMovieList={() => {}}
          activeTab={activeTab}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
        />, {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(movieExtendedComponent).toMatchSnapshot();
});
