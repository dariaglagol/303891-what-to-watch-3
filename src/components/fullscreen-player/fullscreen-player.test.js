import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import FullscreenPlayer from "./fullscreen-player";
import history from "../../history";

it(`Render full screen component`, () => {
  const fullScreenComponent = renderer
    .create(
        <Router history={history}>
          <FullscreenPlayer
            onExitClick={() => {}}
            renderVideo={() => {}}
            onFullScreenButtonClick={() => {}}
            onPlayClick={() => {}}
            progress={10}
            duration={33}
            film={{id: 2, name: `name`}}
          />
        </Router>

    ).toJSON();

  expect(fullScreenComponent).toMatchSnapshot();
});
