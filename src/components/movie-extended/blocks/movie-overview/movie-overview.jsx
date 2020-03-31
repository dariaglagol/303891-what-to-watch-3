import React from "react";
import PropTypes from "prop-types";

const MovieOverview = (props) => {
  const {
    director,
    starring,
    runTime,
    genre,
    released
  } = props;

  function _renderStarringList() {
    return starring.map((starringItem) => {
      return (
        <React.Fragment key={starringItem}>
          {starringItem} <br />
        </React.Fragment>
      );
    });
  }

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {_renderStarringList()}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

MovieOverview.defaultProps = {
  director: ``,
  starring: [],
  runTime: 0,
  genre: ``,
  released: 0,
};

MovieOverview.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default MovieOverview;
