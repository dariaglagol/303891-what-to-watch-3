import React from "react";
import Enzyme, {mount} from "enzyme";
import {MemoryRouter} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import Header from "./header";

Enzyme.configure({
  adapter: new Adapter(),
});

const unauthorizedUserData = {};

it(`Header sign in click, when user unauthorized`, () => {
  const singInClickHandler = jest.fn();

  const headerComponent = mount(
      <MemoryRouter>
        <Header
          userData={unauthorizedUserData}
          authStatus={`NO_AUTH`}
          onSignInClick={singInClickHandler}
        />
      </MemoryRouter>
  );

  expect(
      headerComponent
      .find(`Link`)
      .at(0).props().to
  ).toEqual(`/`);
});

