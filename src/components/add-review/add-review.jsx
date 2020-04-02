import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import RatingStar from "@components/add-review/blocks/rating-star";
import {RATING_STARS_COUNT, TextAreaMinMaxValues} from "@utils/constants";

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
          <RatingStar
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

    this._reviewRef.current.value = ``;
  }

  _reviewTypeHandler() {
    const {toggleSubmitButton} = this.props;

    const reviewText = this._reviewRef.current.value;

    if (reviewText.length > TextAreaMinMaxValues.MIN && reviewText.length < TextAreaMinMaxValues.MAX) {
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

AddReview.propTypes = {
  onStarsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  toggleSubmitButton: PropTypes.func.isRequired,
  onSignInClick: PropTypes.func.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  authStatus: PropTypes.string.isRequired,
  movieDetails: PropTypes.oneOfType([
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    }),
    PropTypes.exact({}).isRequired,
  ]),
  isSubmitButtonDisable: PropTypes.bool.isRequired,
  reviewError: PropTypes.oneOfType([
    PropTypes.shape({
      error: PropTypes.string
    }),
    PropTypes.shape({})
  ])
};

export default AddReview;
