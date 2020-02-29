import React from "react";
import PropTypes from "prop-types";
import Catalog from "@components/catalog/catalog";
import MovieCard from "@components/movie-card/movie-card";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {promoMovieCover, films, onFilmClick} = props;

  return (
    <React.Fragment>
      <MovieCard
        promoMovieCover={promoMovieCover}
        onFilmClick={onFilmClick}
      />
      <div className="page-content">
        <Catalog
          films={films}
          onFilmClick={onFilmClick}
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
  onFilmClick: PropTypes.func.isRequired
};

export default Main;
