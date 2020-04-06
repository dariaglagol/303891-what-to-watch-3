import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import Footer from "./footer";
import history from "../../history";

it(`Footer render`, () => {
  const footerComponent = renderer
    .create(
        <Router history={history}>
          <Footer />
        </Router>
    )
    .toJSON();

  expect(footerComponent).toMatchSnapshot();
});
