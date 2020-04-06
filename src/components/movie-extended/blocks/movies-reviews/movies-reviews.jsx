import React from "react";
import PropTypes from "prop-types";
import chunk from "lodash/chunk";
import moment from "moment";
import {FILM_REVIEWS_COLUMN_COUNT} from "@utils/constants";

const MovieReviews = (props) => {
  const {reviews} = props;

  function _renderReview(review) {
    const {comment, user: {name}, date, rating, id} = review;
    return (
      <div className="review" key={`${id}-${date}`}>
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{name}</cite>
            <time className="review__date" dateTime="2016-12-24">{moment(date).format(`MMMM DD, YYYY`)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    );
  }

  function _prepareReviewsArray() {
    return chunk(reviews, FILM_REVIEWS_COLUMN_COUNT);
  }

  function _renderReviews() {
    const [firstChunk, secondChunk] = _prepareReviewsArray();

    if (!firstChunk) {
      return (<p>Nobody left review</p>);
    }

    if (secondChunk) {
      return (
        <React.Fragment>
          <div className="movie-card__reviews-col">
            {firstChunk.map((review) => {
              return _renderReview(review);
            })}
          </div>
          <div className="movie-card__reviews-col">
            {secondChunk.map((review) => {
              return _renderReview(review);
            })}
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="movie-card__reviews-col">
        {firstChunk.map((review) => {
          return _renderReview(review);
        })}
      </div>
    );
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      {_renderReviews()}
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    comment: PropTypes.string.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }),
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }))
};

export default MovieReviews;
