import React from "react";

const Rating = ({item, onChange}) => {
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

export default Rating;
