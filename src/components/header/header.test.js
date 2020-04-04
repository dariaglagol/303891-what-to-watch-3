import React from "react";
import {Router} from "react-router-dom";
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
        <Router>
          <Header
            userData={userData}
            authStatus={`NO_AUTH`}
            onSignInClick={() => {}}
          />
        </Router>
    )
    .toJSON();

  expect(headerComponent).toMatchSnapshot();
});
