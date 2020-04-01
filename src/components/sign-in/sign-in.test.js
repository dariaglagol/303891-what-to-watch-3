import React from "react";
import renderer from "react-test-renderer";
import withSingIn from "@hocs/with-sign-in/with-sign-in";
const invalidEmptyFields = [];

const MockComponent = () => {
  return (
    <div>
      Mocked Component
    </div>
  );
};

const MockSignInWrapped = withSingIn(MockComponent);

it(`Render sign in`, () => {
  const signInComponent = renderer
    .create(
        <MockSignInWrapped
          onSubmit={() => {}}
          invalidEmptyFields={invalidEmptyFields}
        />,
        {createNodeMock: () => {
          return {};
        }}
    ).toJSON();

  expect(signInComponent).toMatchSnapshot();
});
