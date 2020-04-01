import React from "react";
import PropTypes from "prop-types";

const RatingStar = ({item, onChange}) => {
  function _starClickHandler() {
    onChange(item);
  }

  return (
    <React.Fragment>
      <input
        className="rating__input"
        id={`star-${item}`}
        type="radio"
        name="rating"
        value={item}
        onChange={_starClickHandler}
      />
      <label
        className="rating__label"
        htmlFor={`star-${item}`}
      >
        Rating {item}
      </label>
    </React.Fragment>
  );
};

RatingStar.propTypes = {
  item: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingStar;
