import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import Rating from "@components/add-review/blocks/rating";
import {RATING_STARS_COUNT} from "@utils/constants";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._reviewRef = createRef();

    this._submitHandler = this._submitHandler.bind(this);
    this._reviewTypeHandler = this._reviewTypeHandler.bind(this);
  }

  _renderRating() {
    const {
      onStarsChange,
    } = this.props;

    const serviceRatingList = new Array(RATING_STARS_COUNT).fill(``);
    return (
      serviceRatingList.map((item, index) => {
        return (
          <Rating
            item={index + 1}
            key={`star-${index + 1}`}
            onChange={onStarsChange}
          />
        );
      })
    );
  }

  _submitHandler(e) {
    e.preventDefault();
    const {onSubmit} = this.props;

    const reviewText = this._reviewRef.current.value;

    onSubmit(reviewText);
  }

  _reviewTypeHandler() {
    const {toggleSubmitButton} = this.props;

    const reviewText = this._reviewRef.current.value;

    if (reviewText.length > 5 && reviewText.length < 400) {
      toggleSubmitButton(false);
    } else {
      toggleSubmitButton(true);
    }
  }

  render() {
    const {
      userData,
      authStatus,
      onSignInClick,
      movieDetails,
      isSubmitButtonDisable,
      reviewError
    } = this.props;

    const {
      name,
      posterImage,
      backgroundImage,
    } = movieDetails;

    const {error} = reviewError;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            userData={userData}
            authStatus={authStatus}
            onSignInClick={onSignInClick}
          />

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={posterImage}
              alt={name} width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this._submitHandler}>
            <p>{error}</p>
            <div className="rating">
              <div className="rating__stars">
                {this._renderRating()}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                ref={this._reviewRef}
                onKeyPress={this._reviewTypeHandler}
              />
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isSubmitButtonDisable}>
                  Post
                </button>
              </div>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default AddReview;
