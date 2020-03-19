import React from "react";
import PropTypes from "prop-types";
import Catalog from "@components/catalog/catalog";
import PromoFilm from "@components/promo-film/promo-film";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {promoMovieCover, films, onFilmClick, activeGenre, onGenreTabClick} = props;

  return (
    <React.Fragment>
      <PromoFilm
        promoMovieCover={promoMovieCover}
        onFilmClick={onFilmClick}
      />
      <div className="page-content">
        <Catalog
          films={films}
          onGenreTabClick={onGenreTabClick}
          activeGenre={activeGenre}
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
    TITLE: PropTypes.string.isRequired,
  }),
  films: PropTypes.arrayOf(PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  })).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
};

export default Main;
