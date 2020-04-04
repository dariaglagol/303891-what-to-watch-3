import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from "@utils/constants";

const Header = (props) => {
  const {
    userData,
    authStatus
  } = props;

  const {avatarUrl} = userData;

  function _renderHeader() {
    if (authStatus === AuthorizationStatus.AUTH) {
      return (
        <div className="user-block__avatar">
          <Link to={AppRoute.MY_LIST}>
            <img
              src={avatarUrl}
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      );
    }

    return (
      <Link
        to={AppRoute.LOGIN}
        className="user-block__link"
      >
        Sign in
      </Link>
    );
  }

  return (
    <header className="page-header">
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
  authStatus: PropTypes.string.isRequired,
};

export default Header;
