import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import SignIn from "./sign-in";
import history from "../../history";

const userErrors = {};

it(`Render sign in`, () => {
  const signInComponent = renderer
    .create(
        <Router history={history}>
          <SignIn
            onSubmit={() => {}}
            userErrors={userErrors}
            invalidFields={[]}
            isLoading={true}
          />
        </Router>
    ).toJSON();

  expect(signInComponent).toMatchSnapshot();
});
