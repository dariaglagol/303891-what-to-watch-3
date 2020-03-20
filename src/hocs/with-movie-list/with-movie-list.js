import React, {PureComponent} from 'react';
import MoviesList from "@components/movies-list/movies-list";
import {DEFAULT_SHOWN_FILMS} from "@utils/constants";

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
      const {films, onFilmClick} = this.props;

      return <Component
        {...this.props}
        renderMovieList={() => {
          return (
            <MoviesList
              films={films}
              onFilmClick={onFilmClick}
              currentShownFilms={currentShownFilms}
              onShowMoreButtonClick={this._showMoreButtonClickHandler}
            />
          );
        }}
      />;
    }
  }

  WithMovieList.propTypes = {};

  return WithMovieList;
};

export default withMovieList;
