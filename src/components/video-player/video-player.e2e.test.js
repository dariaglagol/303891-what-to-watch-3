import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

Enzyme.configure({
  adapter: new Adapter(),
});

const Mock = {
  src: `src`,
  poster: `poster`,
  isPlaying: false,
};

it(`Should film trailer played after hover`, () => {
  const {src, poster, isPlaying} = Mock;
  const videoPLayerComponent = mount(
      <VideoPlayer
        src={src}
        poster={poster}
        isPlaying={isPlaying}
      />
  );

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  videoPLayerComponent.simulate(`mouseEnter`);
  playStub.mockRestore();
});
