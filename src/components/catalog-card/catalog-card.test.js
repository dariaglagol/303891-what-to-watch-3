import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./calalog-card";

const MOCKED_FILM = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterUrl: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

it(`Render catalog card`, () => {
  const catalogCardComponent = renderer
    .create(
        <CatalogCard
          film={MOCKED_FILM}
        />
    )
    .toJSON();

  expect(catalogCardComponent).toMatchSnapshot();
});
