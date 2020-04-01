import React from "react";
import PropTypes from "prop-types";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in";
import withSingIn from "@hocs/with-sign-in/with-sign-in";

Enzyme.configure({
  adapter: new Adapter(),
});

const invalidEmptyFields = [];

const mockEvent = {
  preventDefault() {}
};

const MockComponent = (props) => {
  const {onSubmit, passwordRef, loginRef, invalidFields} = props;

  return (
    <SignIn
      onSubmit={onSubmit}
      loginRef={loginRef}
      passwordRef={passwordRef}
      invalidFields={invalidFields}
      userErrors={{}}
    />
  );
};

const MockSignInWrapped = withSingIn(MockComponent);

it(`Sign in submit click`, () => {
  const submitHandler = jest.fn();

  const signInComponent = mount(
      <MockSignInWrapped
        onSubmit={submitHandler}
        invalidEmptyFields={invalidEmptyFields}
      />
  );

  const submitButton = signInComponent.find(`.sign-in__form`);
  submitButton.simulate(`submit`, mockEvent);

  expect(submitHandler).toHaveBeenCalledTimes(1);
  expect(submitHandler).toBeCalledWith();
});
