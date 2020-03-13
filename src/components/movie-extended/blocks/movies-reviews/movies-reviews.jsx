import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const MovieReviews = (props) => {
  const {reviews} = props;

  function _renderReview(review) {
    const {text, author, date, rating} = review;
    return (
      <div className="review" key={`${date}-${author}`}>
        <blockquote className="review__quote">
          <p className="review__text">{text}</p>

          <footer className="review__details">
            <cite className="review__author">{author}</cite>
            <time className="review__date" dateTime="2016-12-24">{date}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>
    );
  }

  function _prepareReviewsArray() {
    return _.chunk(reviews, 2);
  }

  function _renderReviews() {
    const reviewChunks = _prepareReviewsArray();

    if (reviewChunks.length > 1) {
      return (
        <React.Fragment>
          <div className="movie-card__reviews-col">
            {reviewChunks[0].map((review) => {
              return _renderReview(review);
            })}
          </div>
          <div className="movie-card__reviews-col">
            {reviewChunks[1].map((review) => {
              return _renderReview(review);
            })}
          </div>
        </React.Fragment>
      );
    }

    return (
      <div className="movie-card__reviews-col">
        {reviewChunks[0].map((review) => {
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
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }))
};

export default MovieReviews;
