import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./header";

Enzyme.configure({
  adapter: new Adapter(),
});

const userData = {
  id: 1,
  avatarUrl: `avatarUrl`,
  email: `email`,
  name: `name`,
};

const pageType = `auth`;

it(`Header sign in click`, () => {
  const singInClickHandler = jest.fn();

  const headerComponent = shallow(
      <Header
        userData={userData}
        onSignInClick={singInClickHandler}
      />
  );

  const signInButton = headerComponent.find(`.user-block__link`);
  signInButton.simulate(`click`);

  expect(singInClickHandler).toHaveBeenCalledTimes(1);
  expect(singInClickHandler).toBeCalledWith(pageType);
});
