import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";

it(`Footer render`, () => {
  const footerComponent = renderer
    .create(
        <Footer />
    )
    .toJSON();

  expect(footerComponent).toMatchSnapshot();
});
