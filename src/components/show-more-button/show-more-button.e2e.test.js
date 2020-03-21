import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click to show more button`, () => {
  const showMoreButtonClickHandler = jest.fn();

  const showMoreButtonComponent = shallow(
      <ShowMoreButton
        onShowMoreButtonClick={showMoreButtonClickHandler}
      />
  );

  const button = showMoreButtonComponent.find(`.catalog__button`);

  button.simulate(`click`);
  expect(showMoreButtonClickHandler).toHaveBeenCalledTimes(1);
  expect(showMoreButtonClickHandler).toBeCalledWith();
});
