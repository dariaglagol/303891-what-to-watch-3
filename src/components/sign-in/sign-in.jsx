import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Footer from "@components/footer/footer";
import {AppRoute} from "@utils/constants";

export default class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = createRef();
    this._passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _renderInputs() {
    return (
      <React.Fragment>
        <div className='sign-in__field'>
          <input
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"
            required
            pattern='^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$'
            ref={this._loginRef}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className='sign-in__field'>
          <input
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"
            required
            pattern='[A-Za-z0-9]+$'
            ref={this._passwordRef}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </React.Fragment>
    );
  }

  _isFormInvalid() {
    return this._passwordRef.current.validity.patternMismatch &&
      this._loginRef.current.validity.patternMismatch;
  }

  _renderMessage() {
    const {userErrors} = this.props;

    const error = userErrors.data && userErrors.data.error || userErrors.message;

    if (error) {
      return (
        <div className="sign-in__message">
          <p>{error}</p>
        </div>
      );
    }

    return null;
  }

  handleSubmit(e) {
    e.preventDefault();

    const {onSubmit} = this.props;

    if (!this._isFormInvalid()) {
      onSubmit({
        login: this._loginRef.current.value,
        password: this._passwordRef.current.value,
      });
    }
  }

  render() {
    const {isLoading} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link
              to={AppRoute.ROOT}
              className="logo__link"
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this.handleSubmit}>
            <fieldset disabled={isLoading}>
              {this._renderMessage()}
              <div className="sign-in__fields">
                {this._renderInputs()}
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </fieldset>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  userErrors: PropTypes.oneOfType([
    PropTypes.shape({
      data: PropTypes.shape({
        error: PropTypes.string,
      }),
      message: PropTypes.string,
    }),
    PropTypes.shape({})
  ]),
  invalidFields: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.exact([])
  ]),
  isLoading: PropTypes.bool.isRequired
};
