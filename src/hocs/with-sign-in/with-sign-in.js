import React, {createRef, PureComponent} from "react";
import {EMAIL_REGEXP, SignInFiled} from "@utils/constants";

const withSingIn = (Component) => {
  class WithSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        invalidFields: []
      };

      this._passwordRef = createRef();
      this._loginRef = createRef();

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    _getInvalidValues() {
      const login = {
        value: this._loginRef.current.value || null,
        key: SignInFiled.LOGIN
      };
      const password = {
        value: this._passwordRef.current.value || null,
        key: SignInFiled.PASSWORD
      };

      const isEmailValid = login.value && login.value.match(EMAIL_REGEXP);

      const invalidFields = [];

      [login, password].forEach((field) => {
        const emailValidation = field.key === SignInFiled.LOGIN && !isEmailValid;

        if (emailValidation || field.value === null) {
          invalidFields.push(field.key);
        }
      });

      this.setState(() => {
        return {
          invalidFields
        };
      });

      return invalidFields;
    }

    handleSubmit(e) {
      e.preventDefault();

      this._getInvalidValues();

      const {onSubmit} = this.props;

      if (!this._getInvalidValues().length) {
        onSubmit({
          login: this._loginRef.current.value,
          password: this._passwordRef.current.value,
        });
      }
    }

    render() {
      const {invalidFields} = this.state;

      return (
        <Component
          {...this.props}
          onSubmit={this.handleSubmit}
          loginRef={this._loginRef}
          passwordRef={this._passwordRef}
          invalidFields={invalidFields}
        />
      );
    }
  }

  return WithSignIn;
};

export default withSingIn;
