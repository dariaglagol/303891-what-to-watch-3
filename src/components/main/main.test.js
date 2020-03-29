import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const Mocks = {
  mockFilmData: {
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `color`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    rating: 124,
    scoresCount: 8.9,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
    runTime: 113,
    genre: `Comedy`,
    released: 2020,
    id: 1,
    isFavorite: false,
    videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  defaultActiveGenre: {
    single: `All genres`,
    multiply: `All genres`
  },
  mockedCatalogFilms: [
    {
      posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      genre: `Comedy`,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
    },
    {
      posterImage: `img/bohemian-rhapsody.jpg`,
      previewImage: `img/bohemian-rhapsody.jpg`,
      backgroundImage: `img/bohemian-rhapsody.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      name: `Bohemian Rhapsody`,
      genre: `Horror`,
      previewVideoLink: `previewVideoLink`
    },
    {
      posterImage: `img/macbeth.jpg`,
      previewImage: `img/macbeth.jpg`,
      backgroundImage: `img/macbeth.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `previewVideoLink`,
      name: `Macbeth`,
      genre: `Drama`,
    },
    {
      posterImage: `img/aviator.jpg`,
      previewImage: `img/aviator.jpg`,
      backgroundImage: `img/aviator.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      name: `Bohemian Rhapsody`,
      previewVideoLink: `previewVideoLink`,
      genre: `Comedy`,
    },
    {
      posterImage: `img/we-need-to-talk-about-kevin.jpg`,
      previewImage: `img/we-need-to-talk-about-kevin.jpg`,
      backgroundImage: `img/we-need-to-talk-about-kevin.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      name: `We need to talk about Kevin`,
      previewVideoLink: `previewVideoLink`,
      genre: `Science`,
    },
    {
      posterImage: `img/what-we-do-in-the-shadows.jpg`,
      previewImage: `img/what-we-do-in-the-shadows.jpg`,
      backgroundImage: `img/what-we-do-in-the-shadows.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `previewVideoLink`,
      name: `What We Do in the Shadows`,
      genre: `Detective`,
    },
    {
      posterImage: `img/revenant.jpg`,
      previewImage: `img/revenant.jpg`,
      backgroundImage: `img/revenant.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `previewVideoLink`,
      name: `Revenant`,
      genre: `Thriller`,
    },
    {
      posterImage: `img/johnny-english.jpg`,
      previewImage: `img/johnny-english.jpg`,
      backgroundImage: `img/johnny-english.jpg`,
      backgroundColor: `color`,
      description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
      rating: 124,
      scoresCount: 8.9,
      director: `Wes Andreson`,
      starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
      runTime: 113,
      released: 2020,
      id: 1,
      isFavorite: false,
      videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      previewVideoLink: `previewVideoLink`,
      name: `Johnny English`,
      genre: `Historical`,
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
