import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus, PageTypes} from "@utils/constants";

const Header = (props) => {
  const {
    userData,
    onSignInClick,
    authStatus
  } = props;

  const {avatarUrl} = userData;

  function _signInClickHandler(e) {
    e.preventDefault();
    onSignInClick(PageTypes.AUTH);
  }

  function _renderHeader() {
    if (authStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      );
    }

    return (
      <a
        href="sign-in.html"
        className="user-block__link"
        onClick={_signInClickHandler}
      >
        Sign in
      </a>
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
        {_renderHeader()}
      </div>
    </header>
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
  authStatus: PropTypes.string.isRequired,
};

export default Header;
