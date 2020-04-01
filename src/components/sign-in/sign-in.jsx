import React from "react";
import PropTypes from "prop-types";
import Footer from "@components/footer/footer";

const SignIn = (props) => {
  const {
    onSubmit,
    loginRef,
    passwordRef,
    invalidFields = []
  } = props;

  const [login, password] = invalidFields;

  const {userErrors: {error}} = props;

  function _renderInputs() {
    return (
      <React.Fragment>
        <div className={`${login ? `sign-in__field--error` : ``} sign-in__field`}>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            ref={loginRef}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={`${password ? `sign-in__field--error` : ``} sign-in__field`}>
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            ref={passwordRef}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </React.Fragment>
    );
  }

  function _renderMessage() {
    if (error) {
      return (
        <div className="sign-in__message">
          <p>{error}</p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmit}>
          {_renderMessage()}
          <div className="sign-in__fields">
            {_renderInputs()}
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userErrors: PropTypes.shape({
    error: PropTypes.string.isRequired
  }),
  loginRef: PropTypes.node.isRequired,
  passwordRef: PropTypes.node.isRequired,
  invalidFields: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SignIn;
