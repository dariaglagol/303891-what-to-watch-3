import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./header";

Enzyme.configure({
  adapter: new Adapter(),
});

const unauthorizedUserData = {};

const pageType = `auth`;

const mockEvent = {
  preventDefault() {}
};

it(`Header sign in click, when user unauthorized`, () => {
  const singInClickHandler = jest.fn();

  const headerComponent = shallow(
      <Header
        userData={unauthorizedUserData}
        authStatus={`NO_AUTH`}
        onSignInClick={singInClickHandler}
      />
  );

  const signInButton = headerComponent.find(`.user-block__link`);
  signInButton.simulate(`click`, mockEvent);

  expect(singInClickHandler).toHaveBeenCalledTimes(1);
  expect(singInClickHandler).toBeCalledWith(pageType);
});

