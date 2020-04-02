import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = (props) => {
  const {response: {error}} = props;
  return (
    <div className="error-message">
      <h1 className="user-page__title">{error}</h1>
    </div>
  );
};

ErrorMessage.propTypes = {
  response: PropTypes.shape({
    error: PropTypes.string.isRequired
  }).isRequired
};

export default ErrorMessage;
