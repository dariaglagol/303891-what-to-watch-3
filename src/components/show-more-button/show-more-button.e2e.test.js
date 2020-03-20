import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter(),
});

const IS_BUTTON_HIDE = false;

it(`Click to show more button`, () => {
  const showMoreButtonClickHandler = jest.fn();

  const showMoreButtonComponent = shallow(
      <ShowMoreButton
        onShowMoreButtonClick={showMoreButtonClickHandler}
        isButtonHide={IS_BUTTON_HIDE}
      />
  );

  const button = showMoreButtonComponent.find(`.catalog__button`);

  button.simulate(`click`);
  expect(showMoreButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(showMoreButtonClickHandler).toBeCalledWith();
});
