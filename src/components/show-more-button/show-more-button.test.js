import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

it(`render show more button`, () => {
  const showMoreButtonComponent = renderer
    .create(
        <ShowMoreButton
          onShowMoreButtonClick={() => {}}
        />
    ).toJSON();

  expect(showMoreButtonComponent).toMatchSnapshot();
});
