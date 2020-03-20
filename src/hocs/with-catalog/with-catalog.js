import React, {PureComponent} from 'react';
import Catalog from "@components/catalog/catalog";
import {DEFAULT_SHOWN_FILMS} from "@utils/constants";

const withCatalog = (Component) => {
  class WithCatalog extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentShownFilms: DEFAULT_SHOWN_FILMS,
      };

      this._showMoreButtonClickHandler = this._showMoreButtonClickHandler.bind(this);
      this._resetShownFilms = this._resetShownFilms.bind(this);
    }

    _resetShownFilms() {
      this.setState({
        currentShownFilms: DEFAULT_SHOWN_FILMS
      });
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
              resetShownFilms={this._resetShownFilms}
              currentShownFilms={currentShownFilms}
              onShowMoreButtonClick={this._showMoreButtonClickHandler}
            />
          );
        }}
      />;
    }
  }

  WithCatalog.propTypes = {};

  return WithCatalog;
};

export default withCatalog;
