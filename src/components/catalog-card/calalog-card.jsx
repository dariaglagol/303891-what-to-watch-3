import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "@components/video-player/video-player";
import {PageTypes} from "@utils/constants";

const CatalogCard = (props) => {
  const {film, onFilmCatalogCardHover, onFilmClick, isPlaying} = props;

  const {title, posterUrl, preview} = film;

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
        <VideoPlayer
          isPlaying={isPlaying}
          poster={posterUrl}
          src={preview}
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
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default CatalogCard;
