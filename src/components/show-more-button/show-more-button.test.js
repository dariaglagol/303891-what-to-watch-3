import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

const IS_BUTTON_HIDE = false;

it(`render show more button`, () => {
  const showMoreButtonComponent = renderer
    .create(
        <ShowMoreButton
          onShowMoreButtonClick={() => {}}
          isButtonHide={IS_BUTTON_HIDE}
        />
    ).toJSON();

  expect(showMoreButtonComponent).toMatchSnapshot();
});
