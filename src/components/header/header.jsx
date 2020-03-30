import React from "react";
import {AuthorizationStatus, PageTypes} from "@utils/constants";

const Header = (props) => {
  const {
    authStatus,
    onSignInClick
  } = props;

  function _signInClickHandler(e) {
    e.preventDefault();
    onSignInClick(PageTypes.AUTH);
  }

  function _renderHeader() {
    if (authStatus === AuthorizationStatus.AUTH) {
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
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
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

export default Header;

