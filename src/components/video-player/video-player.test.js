import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

const MOCK = {
  src: `src`,
  isPlaying: false,
  poster: `src`,
  muteSound: true,
};

it(`Video player render`, () => {
  const {src, isPlaying, poster, muteSound} = MOCK;
  const videoPlayerComponent = renderer
    .create(
        <VideoPlayer
          src={src}
          isPlaying={isPlaying}
          poster={poster}
          muteSound={muteSound}
        />,
        {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(videoPlayerComponent).toMatchSnapshot();
});
