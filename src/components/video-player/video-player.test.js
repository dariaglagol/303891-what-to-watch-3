import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const MOCK = {
  src: `src`,
  isPlaying: false,
  poster: `src`,
};

it(`Video player render`, () => {
  const {src, isPlaying, poster} = MOCK;
  const videoPlayerComponent = renderer
    .create(
        <VideoPlayer
          src={src}
          isPlaying={isPlaying}
          poster={poster}
        />,
        {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(videoPlayerComponent).toMatchSnapshot();
});
