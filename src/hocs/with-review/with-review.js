import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {RATING_ERROR_TEXT} from "@utils/constants";

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        stars: 0,
        isSubmitButtonDisable: true,
        validationErrors: []
      };

      this._starsChangeHandler = this._starsChangeHandler.bind(this);
      this._submitHandler = this._submitHandler.bind(this);
      this._toggleSubmitButton = this._toggleSubmitButton.bind(this);
    }

    _starsChangeHandler(stars) {
      this.setState({
        stars
      });
    }

    _toggleSubmitButton(value) {
      this.setState({
        isSubmitButtonDisable: value
      });
    }

    _submitHandler(reviewText) {
      const {onSubmit} = this.props;
      const {stars} = this.state;

      if (stars === 0) {
        this.setState({
          validationErrors: [RATING_ERROR_TEXT]
        });

        return;
      }

      onSubmit({stars, reviewText});

      this.setState({
        stars: 0,
        isSubmitButtonDisable: true,
      });
    }

    render() {
      const {isSubmitButtonDisable, validationErrors} = this.state;
      return (
        <Component
          {...this.props}
          onStarsChange={this._starsChangeHandler}
          onSubmit={this._submitHandler}
          toggleSubmitButton={this._toggleSubmitButton}
          isSubmitButtonDisable={isSubmitButtonDisable}
          validationErrors={validationErrors}
        />
      );
    }
  }

  WithReview.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  return WithReview;
};

export default withReview;
