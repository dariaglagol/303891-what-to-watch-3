import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";

export default class WatchList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadWatchFilm} = this.props;

    loadWatchFilm();
  }

  render() {
    const {userData, authStatus, renderMovieList, films} = this.props;

    return (
      <div className="user-page">
        <Header
          userData={userData}
          authStatus={authStatus}
        />

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {renderMovieList(films.length)}
        </section>

        <Footer />
      </div>
    );
  }
}

WatchList.propTypes = {
  films: PropTypes.oneOfType([
    PropTypes.exact([]).isRequired,
    PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      previewVideoLink: PropTypes.string.isRequired,
    })).isRequired,
  ]).isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  authStatus: PropTypes.string.isRequired,
  renderMovieList: PropTypes.func.isRequired,
  loadWatchFilm: PropTypes.func.isRequired,
};
