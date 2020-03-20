import React, {PureComponent} from 'react';
import GenresList from "@components/genres-list/genres-list";


const withFilmCatalog = (Component) => {
  class WithFilmCatalog extends PureComponent {
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
        renderGenreTabs={() => {
          return (
            <GenresList
              currentShownFilms={currentShownFilms}
              onShowMoreButtonClick={this._showMoreButtonClickHandler}
            />
          );
        }}
      />;
    }
  }

  WithFilmCatalog.propTypes = {};

  return WithFilmCatalog;
};

export default withFilmCatalog;
