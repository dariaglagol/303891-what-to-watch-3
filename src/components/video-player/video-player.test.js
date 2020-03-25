import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const MockedFilm = {
  title: `title`,
  poster: `url`,
  genre: `genre`,
  preview: `preview`,
};

it(`Video player render`, () => {
  const videoPlayerComponent = renderer
    .create(
        <VideoPlayer
          film={MockedFilm}
        />,
        {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(videoPlayerComponent).toMatchSnapshot();
});
