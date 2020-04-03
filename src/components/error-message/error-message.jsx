import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  const {errorMessage: {
    data: {error},
    message
  }} = props;

  return (
    <div className="error-message">
      <h1 className="user-page__title">{error || message}</h1>
    </div>
  );
};

ErrorMessage.propTypes = {
  errorMessage: PropTypes.shape({
    data: PropTypes.shape({
      error: PropTypes.string,
    }),
    message: PropTypes.string
  }).isRequired
};

export default ErrorMessage;
