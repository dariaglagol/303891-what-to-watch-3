import React from "react";
import PropTypes from "prop-types";
import Catalog from "@components/catalog/catalog";
import MovieCard from "@components/movie-card/movie-card";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {filmData, films, onTitleClick} = props;

  return (
    <React.Fragment>
      <MovieCard
        filmData={filmData}
        onTitleClick={onTitleClick}
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
  filmData: PropTypes.shape({
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.string.isRequired,
    TITLE: PropTypes.string.isRequired
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  })).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default Main;
