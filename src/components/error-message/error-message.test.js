import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from "./error-message";

const mockedResponse = {
  error: `error`
};

it(`error render`, () => {
  const errorMessage = renderer
    .create(
        <ErrorMessage
          response={mockedResponse}
        />
    ).toJSON();

  expect(errorMessage).toMatchSnapshot();
});
