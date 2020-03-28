import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockedFilm = {
  name: `title`,
  poster: `url`,
  genre: `genre`,
  preview: `preview`,
};

it(`Should film trailer played after hover`, () => {
  const videoPLayerComponent = mount(
      <VideoPlayer
        film={MockedFilm}
      />
  );

  const playStub = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => {});

  videoPLayerComponent.simulate(`mouseEnter`);
  playStub.mockRestore();
});
