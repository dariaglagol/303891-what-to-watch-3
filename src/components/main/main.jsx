import React from "react";
import PropTypes from "prop-types";
import Catalog from "@components/catalog/catalog";
import MovieCard from "@components/movie-card/movie-card";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {filmData, catalogFilmsNamesList} = props;

  return (
    <React.Fragment>
      <MovieCard
        filmData={filmData}
      />
      <div className="page-content">
        <Catalog
          catalogFilmsNamesList={catalogFilmsNamesList}
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
  catalogFilmsNamesList: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Main;
