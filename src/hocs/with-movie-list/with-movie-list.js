import React, {PureComponent} from "react";
import MoviesList from "@components/movies-list/movies-list";
import PropTypes from "prop-types";


const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: null,
      };

      this._filmCatalogCardHoverHandler = this._filmCatalogCardHoverHandler.bind(this);
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

    render() {
      const {activeFilm} = this.state;
      const {films, onFilmClick} = this.props;

      return (
        <Component
          {...this.props}
          renderMovieList={(currentShownFilms, sortedFilms = films) => {
            return (
              <MoviesList
                films={sortedFilms}
                currentShownFilms={currentShownFilms}
                onFilmClick={onFilmClick}
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
    films: PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    })).isRequired,
    onFilmClick: PropTypes.func.isRequired,
  };

  return WithMovieList;
};

export default withMovieList;
