import React, {PureComponent} from "react";
import MoviesList from "@components/movies-list/movies-list";

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
          renderMovieList={(currentShownFilms) => {
            return (
              <MoviesList
                films={films}
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

  WithMovieList.propTypes = {};

  return WithMovieList;
};

export default withMovieList;
