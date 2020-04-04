import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import RatingStar from "@components/add-review/blocks/rating-star";
import {RATING_STARS_COUNT} from "@utils/constants";
import {findFilm} from "@utils/utils";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this._submitHandler = this._submitHandler.bind(this);
    this._reviewChangeHandler = this._reviewChangeHandler.bind(this);
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
      }).reverse()
    );
  }

  _submitHandler(e) {
    e.preventDefault();
    const {onSubmit, match: {params}} = this.props;
    onSubmit(params.id);
  }

  _reviewChangeHandler(e) {
    const {onTextChange} = this.props;

    const {target} = e;

    onTextChange(target.value);
  }

  _renderError() {
    const {reviewError, validationErrors} = this.props;

    const error = reviewError.data && reviewError.data.error || reviewError.message;

    if (error || validationErrors) {
      return (
        <p>{error || validationErrors.join(` `)}</p>
      );
    }

    return null;
  }

  render() {
    const {
      userData,
      authStatus,
      isSubmitButtonDisable,
      isLoading,
      text,
      films,
      match: {params},
    } = this.props;

    const movieDetails = findFilm(films, params.id);

    const {
      name,
      posterImage,
      backgroundImage,
    } = movieDetails;

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
            {this._renderError()}
            <fieldset disabled={isLoading}>
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
                  value={text}
                  onChange={this._reviewChangeHandler}
                />
                <div className="add-review__submit">
                  <button
                    className="add-review__btn"
                    type="submit"
                    disabled={isSubmitButtonDisable}
                  >
                    Post
                  </button>
                </div>

              </div>
            </fieldset>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  films: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.exact({
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
    })),
    PropTypes.shape([]).isRequired,
  ]).isRequired,
  onStarsChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
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
  text: PropTypes.string.isRequired,
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
      data: PropTypes.shape({
        error: PropTypes.string,
      }),
      message: PropTypes.string,
    }),
    PropTypes.shape({})
  ]),
  validationErrors: PropTypes.oneOfType([
    PropTypes.exact([]),
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  onTextChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.exact({
      id: PropTypes.string
    })
  }),
};

export default AddReview;
