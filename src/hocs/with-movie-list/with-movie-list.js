import React, {PureComponent} from 'react';
import Catalog from "@components/catalog/catalog";
import {DEFAULT_SHOWN_FILMS} from "@utils/constants";
import PropTypes from "prop-types";

const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentShownFilms: DEFAULT_SHOWN_FILMS,
      };

      this._showMoreButtonClickHandler = this._showMoreButtonClickHandler.bind(this);
    }

    _showMoreButtonClickHandler() {
      this.setState((prevSate) => {
        return {currentShownFilms: prevSate.currentShownFilms + DEFAULT_SHOWN_FILMS};
      });
    }

    render() {
      const {currentShownFilms} = this.state;

      return <Component
        {...this.props}
        renderCatalog={() => {
          return (
            <Catalog
              {...this.props}
              currentShownFilms={currentShownFilms}
              onShowMoreButtonClick={this._showMoreButtonClickHandler}
            />
          );
        }}
      />;
    }
  }

  WithMovieList.propTypes = {
  };

  return WithMovieList;
};

export default withMovieList;
