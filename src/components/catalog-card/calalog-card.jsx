import React from "react";
import PropTypes from "prop-types";

const CatalogCard = (props) => {
  const {film, onFilmCatalogCardHover, onFilmClick} = props;

  const {title, posterUrl} = film;

  function _onFilmHover() {
    onFilmCatalogCardHover(film);
  }

  function _onFilmClick() {
    onFilmClick(`movie`);
  }

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onFilmHover}
      onClick={_onFilmClick}
    >
      <div className="small-movie-card__image">
        <img
          src={posterUrl}
          alt={title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

CatalogCard.propTypes = {
  film: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired
  }).isRequired,
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired
};

export default CatalogCard;
