import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Main from "@components/main/main";
import MovieExtended from "@components/movie-extended/movie-extended";
import withTabs from "@hocs/with-tabs/with-tabs";
import withMovieList from "@hocs/with-movie-list/with-movie-list";
import {PageTypes} from "@utils/constants";
import {ActionCreator} from "../../reducer";

const MovieExtendedComponentWrapped = withTabs(MovieExtended);
const MainComponentWrapped = withMovieList(Main);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePage: PageTypes.MAIN
    };

    this._filmClickHandler = this._filmClickHandler.bind(this);
  }

  _filmClickHandler(activePage) {
    this.setState({
      activePage
    });
  }

  _renderPages() {
    const {activePage} = this.state;
    const {
      promoMovieCover,
      films,
      movieDetails,
      reviews,
      activeGenre,
      onGenreTabClick
    } = this.props;

    switch (activePage) {
      case PageTypes.MAIN:
        return (
          <MainComponentWrapped
            promoMovieCover={promoMovieCover}
            onFilmClick={this._filmClickHandler}
            activeGenre={activeGenre}
            onGenreTabClick={onGenreTabClick}
            films={films}
          />
        );
      case PageTypes.MOVIE:
        return (
          <MovieExtendedComponentWrapped
            promoMovieCover={promoMovieCover}
            onFilmClick={this._filmClickHandler}
            films={films}
            movieDetails={movieDetails}
            reviews={reviews}
          />
        );
    }

    return null;
  }

  render() {
    const {promoMovieCover, films, movieDetails, reviews} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderPages()}
          </Route>
          <Route exact path="/dev-movie-details">
            <MovieExtendedComponentWrapped
              promoMovieCover={promoMovieCover}
              onFilmClick={this._filmClickHandler}
              films={films}
              movieDetails={movieDetails}
              reviews={reviews}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  films: state.films,
  activeGenre: state.activeGenre,
  promoMovieCover: state.promoMovieCover,
  movieDetails: state.movieDetails,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreTabClick(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.getMoviesByGenre(activeGenre));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  promoMovieCover: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  movieDetails: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    runTime: PropTypes.number.isRequired
  }),
  reviews: PropTypes.arrayOf(PropTypes.exact({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};
