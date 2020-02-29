import React from "react";
import PropTypes from "prop-types";
import Catalog from "@components/catalog/catalog";
import MovieCard from "@components/movie-card/movie-card";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {promoMovieCover, films, onPromoFilmClick} = props;

  return (
    <React.Fragment>
      <MovieCard
        promoMovieCover={promoMovieCover}
        onPromoFilmClick={onPromoFilmClick}
      />
      <div className="page-content">
        <Catalog
          films={films}
        />
        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoMovieCover: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired,
    TITLE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  onPromoFilmClick: PropTypes.func.isRequired
};

export default Main;
