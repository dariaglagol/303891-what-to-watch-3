import React from "react";
import PropTypes from "prop-types";
import {getMovieMark} from "@utils/utils";

const MovieDetails = (props) => {
  const {scoresCount, rating, description, director, starring} = props;
  const movieMark = getMovieMark(scoresCount);
  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{scoresCount}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{movieMark}</span>
          <span className="movie-rating__count">{rating} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  scoresCount: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieDetails;
