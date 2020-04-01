import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

const userErrors = {};

it(`Sign in submit click`, () => {
  const submitHandler = jest.fn();

  const signInComponent = mount(
      <SignIn
        onSubmit={submitHandler}
        userErrors={userErrors}
      />
  );

  const submitButton = signInComponent.find(`.sign-in__form`);

  submitButton.simulate(`submit`, mockEvent);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toBeCalledWith({login: ``, password: ``});
});
