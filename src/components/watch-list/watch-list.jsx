import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import Footer from "@components/footer/footer";
import {DEFAULT_SHOWN_FILMS} from "@utils/constants";

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
