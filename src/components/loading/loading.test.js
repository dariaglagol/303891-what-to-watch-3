import React from "react";
import renderer from "react-test-renderer";
import Loading from "./loading";

it(`Loading render`, () => {
  const loadingComponent = renderer.create(
      <Loading />
  ).toJSON();

  expect(loadingComponent).toMatchSnapshot();
});
