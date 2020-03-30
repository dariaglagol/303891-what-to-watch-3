import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  const {response: {data}} = props;
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

        <h1 className="page-title user-page__title">Something went wrong...</h1>
      </header>

      <div className="sign-in user-page__content">
        <p>{data.error}</p>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

ErrorMessage.propTypes = {
  response: PropTypes.shape({
    data: PropTypes.exact({
      error: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ErrorMessage;
