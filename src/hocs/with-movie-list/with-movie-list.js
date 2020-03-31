import React, {PureComponent} from "react";
import MoviesList from "@components/movies-list/movies-list";
import PropTypes from "prop-types";
import {PageTypes} from "@utils/constants";


const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: null,
      };

      this._filmCatalogCardHoverHandler = this._filmCatalogCardHoverHandler.bind(this);
      this._filmCatalogClickHandler = this._filmCatalogClickHandler.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timeout);
    }

    _filmCatalogCardHoverHandler(film) {
      clearTimeout(this._timeout);

      if (film) {
        this._timeout = setTimeout(() => {
          this.setState({
            activeFilm: film
          });
        }, 1000);

        return;
      }

      this.setState({
        activeFilm: null
      });
    }

    _filmCatalogClickHandler() {
      const {onFilmClick} = this.props;
      onFilmClick(PageTypes.MOVIE);
    }

    render() {
      const {activeFilm} = this.state;
      const {films} = this.props;

      return (
        <Component
          {...this.props}
          renderMovieList={(currentShownFilms, sortedFilms = films) => {
            return (
              <MoviesList
                films={sortedFilms}
                currentShownFilms={currentShownFilms}
                onFilmClick={this._filmCatalogClickHandler}
                onFilmCatalogCardHover={this._filmCatalogCardHoverHandler}
                activeFilm={activeFilm}
              />
            );
          }}
        />
      );
    }
  }

  WithMovieList.propTypes = {
    films: PropTypes.oneOfType([
      PropTypes.exact([]),
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired,
    onFilmClick: PropTypes.func.isRequired,
  };

  return WithMovieList;
};

export default withMovieList;
