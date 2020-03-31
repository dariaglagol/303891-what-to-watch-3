import React from "react";
import PropTypes from "prop-types";
import {PageTypes} from "@utils/constants";

const Header = (props) => {
  const {
    userData,
    onSignInClick
  } = props;

  const {avatarUrl} = userData;

  function _signInClickHandler(e) {
    e.preventDefault();
    onSignInClick(PageTypes.AUTH);
  }

  function _renderHeader() {
    if (avatarUrl) {
      return (
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src={avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </div>
        </header>
      );
    }

    return (
      <header className="page-header">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="user-block">
          <a
            href="sign-in.html"
            className="user-block__link"
            onClick={_signInClickHandler}
          >
            Sign in
          </a>
        </div>
      </header>
    );
  }

  return (
    _renderHeader()
  );
};

Header.propTypes = {
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  onSignInClick: PropTypes.func.isRequired,
};

export default Header;
