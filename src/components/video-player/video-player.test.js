import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

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
  director: `director`,
  starring: [`starring`, `starring`],
  runTime: 113,
  released: 2020,
  id: 1,
  isFavorite: false,
  videoLink: `videoLink`,
  previewVideoLink: `previewVideoLink`,
};

it(`Video player render`, () => {
  const videoPlayerComponent = renderer
    .create(
        <VideoPlayer
          film={mockedFilm}
        />,
        {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(videoPlayerComponent).toMatchSnapshot();
});
