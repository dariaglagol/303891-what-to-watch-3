import React from "react";
import PropTypes from "prop-types";
import {PageTypes} from "@utils/constants";

const CatalogCard = (props) => {
  const {film, onFilmCatalogCardHover, onFilmClick, renderVideo} = props;

  const {name} = film;

  function _onFilmHover() {
    onFilmCatalogCardHover(film);
  }

  function _onFilmStopHover() {
    onFilmCatalogCardHover();
  }

  function _onFilmClick() {
    onFilmClick(PageTypes.MOVIE);
  }

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onFilmHover}
      onMouseLeave={_onFilmStopHover}
      onClick={_onFilmClick}
    >
      <div className="small-movie-card__image">
        {renderVideo()}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

CatalogCard.propTypes = {
  film: PropTypes.exact({
    name: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    promoCover: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  renderVideo: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default CatalogCard;
