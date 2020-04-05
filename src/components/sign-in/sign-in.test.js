import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";

const userErrors = {};

it(`Render sign in`, () => {
  const signInComponent = renderer
    .create(
        <SignIn
          onSubmit={() => {}}
          userErrors={userErrors}
          invalidFields={[]}
          isLoading={true}
        />
    ).toJSON();

  expect(signInComponent).toMatchSnapshot();
});
