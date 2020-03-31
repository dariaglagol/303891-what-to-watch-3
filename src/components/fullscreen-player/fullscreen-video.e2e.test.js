import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FullscreenPlayer from "./fullscreen-player";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on close player button called callback`, () => {
  const exitClickHandler = jest.fn();
  const renderVideo = jest.fn();
  const onFullScreenButtonClick = jest.fn();
  const onPlayClick = jest.fn();

  const fullScreenComponent = shallow(
      <FullscreenPlayer
        onExitClick={exitClickHandler}
        renderVideo={renderVideo}
        onFullScreenButtonClick={onFullScreenButtonClick}
        onPlayClick={onPlayClick}
        progress={10}
        duration={33}
      />
  );

  const closeVideoButton = fullScreenComponent.find(`.player__exit`);
  closeVideoButton.simulate(`click`);

  expect(exitClickHandler).toHaveBeenCalledTimes(1);
  expect(exitClickHandler).toBeCalledWith();
});

it(`Click on fullscreen player button called callback`, () => {
  const exitClickHandler = jest.fn();
  const renderVideo = jest.fn();
  const onFullScreenButtonClick = jest.fn();
  const onPlayClick = jest.fn();

  const fullScreenComponent = shallow(
      <FullscreenPlayer
        onExitClick={exitClickHandler}
        renderVideo={renderVideo}
        onFullScreenButtonClick={onFullScreenButtonClick}
        onPlayClick={onPlayClick}
        progress={10}
        duration={33}
      />
  );

  const closeVideoButton = fullScreenComponent.find(`.player__full-screen`);
  closeVideoButton.simulate(`click`);

  expect(onFullScreenButtonClick).toHaveBeenCalledTimes(1);
  expect(onFullScreenButtonClick).toBeCalledWith();
});

it(`Click on pause player button called callback`, () => {
  const exitClickHandler = jest.fn();
  const renderVideo = jest.fn();
  const onFullScreenButtonClick = jest.fn();
  const onPlayClick = jest.fn();

  const fullScreenComponent = shallow(
      <FullscreenPlayer
        onExitClick={exitClickHandler}
        renderVideo={renderVideo}
        onFullScreenButtonClick={onFullScreenButtonClick}
        onPlayClick={onPlayClick}
        progress={10}
        duration={33}
      />
  );

  const closeVideoButton = fullScreenComponent.find(`.player__play`);
  closeVideoButton.simulate(`click`);

  expect(onPlayClick).toHaveBeenCalledTimes(1);
  expect(onPlayClick).toBeCalledWith();
});
