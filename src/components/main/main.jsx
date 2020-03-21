import React from "react";
import PropTypes from "prop-types";
import PromoFilm from "@components/promo-film/promo-film";
import Footer from "@components/footer/footer";

const Main = (props) => {
  const {promoMovieCover, onFilmClick, renderCatalog} = props;

  return (
    <React.Fragment>
      <PromoFilm
        promoMovieCover={promoMovieCover}
        onFilmClick={onFilmClick}
      />
      <div className="page-content">
        {renderCatalog()}
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
  activeGenre: PropTypes.exact({
    multiply: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
  }).isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  renderCatalog: PropTypes.func.isRequired,
};

export default Main;
