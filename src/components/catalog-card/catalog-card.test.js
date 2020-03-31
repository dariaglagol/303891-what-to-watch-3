import React from "react";
import renderer from "react-test-renderer";
import CatalogCard from "./calalog-card";

const mockedFilm = {
  name: `name`,
  genre: `genre`,
  posterImage: `posterImage`,
  previewImage: `previewImage`,
  backgroundImage: `backgroundImage`,
  backgroundColor: `backgroundColor`,
  description: `description`,
  rating: 124,
  scoresCount: 8.9,
  director: ` director`,
  starring: [` starring`, `starring`],
  runTime: 113,
  released: 2020,
  id: 1,
  isFavorite: false,
  videoLink: `videoLink`,
  previewVideoLink: `previewVideoLink`,
};

const mockedPlayProp = false;

it(`Render catalog card`, () => {
  const catalogCardComponent = renderer
    .create(
        <CatalogCard
          film={mockedFilm}
          onFilmCatalogCardHover={() => {}}
          onFilmClick={() => {}}
          renderVideo={() => {}}
          isPlaying={mockedPlayProp}
        />, {createNodeMock: () => {
          return {};
        }}
    )
    .toJSON();

  expect(catalogCardComponent).toMatchSnapshot();
});
