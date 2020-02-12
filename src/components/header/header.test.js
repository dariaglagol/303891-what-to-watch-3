import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

it(`Header render`, () => {
  const headerComponent = renderer
    .create(
        <Header />
    )
    .toJSON();

  expect(headerComponent).toMatchSnapshot();
});
