import React from "react";
import renderer from "react-test-renderer";
import RatingStar from "./rating-star";

it(`Render star`, () => {
  const starComponent = renderer.create(
      <RatingStar
        item={1}
        onChange={() => {}}
      />
  ).toJSON();

  expect(starComponent).toMatchSnapshot();
});
