import React, {PureComponent} from "react";

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        stars: 0,
        isSubmitButtonDisable: true,
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

      onSubmit({stars, reviewText});
    }

    render() {
      const {isSubmitButtonDisable} = this.state;
      return (
        <Component
          {...this.props}
          onStarsChange={this._starsChangeHandler}
          onSubmit={this._submitHandler}
          toggleSubmitButton={this._toggleSubmitButton}
          isSubmitButtonDisable={isSubmitButtonDisable}
        />
      );
    }
  }

  return WithReview;
};

export default withReview;
