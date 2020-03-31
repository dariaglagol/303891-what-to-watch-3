import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";

const userData = {
  id: 1,
  avatarUrl: `avatarUrl`,
  email: `email`,
  name: `name`,
};

it(`Header render`, () => {
  const headerComponent = renderer
    .create(
        <Header
          userData={userData}
          onSignInClick={() => {}}
        />
    )
    .toJSON();

  expect(headerComponent).toMatchSnapshot();
});
