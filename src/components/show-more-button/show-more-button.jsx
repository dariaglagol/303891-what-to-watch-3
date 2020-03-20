import React from "react";
import PropTypes from "prop-types";

const ShowMoreButton = (props) => {
  const {onShowMoreButtonClick, isButtonHide} = props;

  if (isButtonHide) {
    return null;
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          onShowMoreButtonClick();
        }}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.defaultProps = {
  isButtonHide: false
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
  isButtonHide: PropTypes.bool.isRequired,
};

export default ShowMoreButton;
