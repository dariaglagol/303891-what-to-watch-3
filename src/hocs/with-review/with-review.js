import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {validateTextAreaInput, isSubmitButtonDisable} from "@utils/utils";
import {RATING_ERROR_TEXT} from "@utils/constants";

const withReview = (Component) => {
  class WithReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        stars: 0,
        starStatus: null,
        textStatus: null,
        isSubmitButtonDisable: true,
        text: ``,
      };

      this._starsChangeHandler = this._starsChangeHandler.bind(this);
      this._submitHandler = this._submitHandler.bind(this);
      this._textChangeHandler = this._textChangeHandler.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
      const {commentFormSendingResult} = this.state;

      if (commentFormSendingResult) {
        this.setState({
          stars: 0,
          text: ``,
          starStatus: null,
          textStatus: null,
          isSubmitButtonDisable: true,
        });
      }
    }

    _starsChangeHandler(stars) {
      this.setState({
        stars,
        starStatus: !stars ? RATING_ERROR_TEXT : ``
      });
    }

    _textChangeHandler(text) {
      this.setState({
        text,
        textStatus: validateTextAreaInput(text)
      });
    }

    _submitHandler() {
      const {onSubmit} = this.props;
      const {stars, text} = this.state;

      onSubmit({stars, text});
    }

    render() {
      const {text, textStatus, stars, starStatus} = this.state;

      const isButtonDisabled = isSubmitButtonDisable(stars, textStatus);

      return (
        <Component
          {...this.props}
          onStarsChange={this._starsChangeHandler}
          onSubmit={this._submitHandler}
          isSubmitButtonDisable={isButtonDisabled}
          validationErrors={[textStatus, starStatus]}
          text={text}
          onTextChange={this._textChangeHandler}
          textStatus={textStatus}
        />
      );
    }
  }

  WithReview.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    commentFormSendingResult: PropTypes.bool
  };

  return WithReview;
};

export default withReview;
