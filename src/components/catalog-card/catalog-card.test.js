import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./calalog-card";

const MOCKED_FILM = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  preview: `preview`,
};

const MOCKED_PLAY_PROP = false;

const MOCKED_MUTE_SOUND = true;

it(`Render catalog card`, () => {
  const catalogCardComponent = renderer
    .create(
        <CatalogCard
          film={MOCKED_FILM}
          onFilmCatalogCardHover={() => {}}
          onFilmClick={() => {}}
          muteSound={MOCKED_MUTE_SOUND}
          isPlaying={MOCKED_PLAY_PROP}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogCardComponent).toMatchSnapshot();
});
