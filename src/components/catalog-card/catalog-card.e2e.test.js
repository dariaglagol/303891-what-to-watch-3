import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatalogCard from "./calalog-card";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockedFilm = {
  name: `The Grand Budapest Hotel`,
  posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
  previewImage: `img/bg-the-grand-budapest-hotel.jpg`,
  backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
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
};

const MOCKED_PLAY_PROP = false;

const PAGE_TYPE = `movie`;

const mockHoverEvent = {};

it(`Hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
      />
  );

  filmCard.simulate(`mouseEnter`, mockHoverEvent);

  expect(filmCatalogCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(filmCatalogCardHoverHandler).toBeCalledWith(MockedFilm);
});

it(`Stop hover on film card, film's info should pass to callback`, () => {
  const filmCatalogCardHoverHandler = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={filmCatalogCardHoverHandler}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
      />
  );

  filmCard.simulate(`mouseLeave`, mockHoverEvent);

  expect(filmCatalogCardHoverHandler).toHaveBeenCalledTimes(1);
  expect(filmCatalogCardHoverHandler).toBeCalledWith();
});

it(`Click on film card to change page`, () => {
  const onFilmHover = jest.fn();
  const onFilmClick = jest.fn();
  const renderVideo = jest.fn();

  const filmCard = shallow(
      <CatalogCard
        film={MockedFilm}
        onFilmCatalogCardHover={onFilmHover}
        onFilmClick={onFilmClick}
        renderVideo={renderVideo}
        isPlaying={MOCKED_PLAY_PROP}
      />
  );

  filmCard.simulate(`click`);

  expect(onFilmClick.mock.calls.length).toBe(1);
  expect(onFilmClick).toBeCalledWith(PAGE_TYPE);
});
