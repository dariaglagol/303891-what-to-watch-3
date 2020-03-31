import React from "react";
import renderer from "react-test-renderer";
import FullscreenPlayer from "./fullscreen-player";

it(`Render full screen component`, () => {
  const fullScreenComponent = renderer
    .create(
        <FullscreenPlayer
          onExitClick={() => {}}
          renderVideo={() => {}}
          onFullScreenButtonClick={() => {}}
          onPlayClick={() => {}}
          progress={10}
          duration={33}
        />
    ).toJSON();

  expect(fullScreenComponent).toMatchSnapshot();
});
