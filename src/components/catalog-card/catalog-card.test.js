import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./calalog-card";

const MOCKED_FILM = {
  name: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  previewVideoLink: `previewVideoLink`,
};

const MOCKED_PLAY_PROP = false;

it(`Render catalog card`, () => {
  const catalogCardComponent = renderer
    .create(
        <CatalogCard
          film={MOCKED_FILM}
          onFilmCatalogCardHover={() => {}}
          onFilmClick={() => {}}
          renderVideo={() => {}}
          isPlaying={MOCKED_PLAY_PROP}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogCardComponent).toMatchSnapshot();
});
