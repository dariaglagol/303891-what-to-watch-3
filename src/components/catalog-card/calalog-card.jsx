import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getRoute} from "@utils/utils";
import {AppRoute} from "@utils/constants";

const CatalogCard = (props) => {
  const {film, onFilmCatalogCardHover, onFilmClick, renderVideo} = props;

  const {name, id} = film;

  function _onFilmHover() {
    onFilmCatalogCardHover(film);
  }

  function _onFilmStopHover() {
    onFilmCatalogCardHover();
  }

  function _onFilmClick() {
    onFilmClick(film);
  }

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onFilmHover}
      onMouseLeave={_onFilmStopHover}
      onClick={_onFilmClick}
    >
      <Link to={getRoute(AppRoute.FILMS, id)}>
        <div className="small-movie-card__image">
          {renderVideo()}
        </div>
        <h3 className="small-movie-card__title">
          <span className="small-movie-card__link">{name}</span>
        </h3>
      </Link>
    </article>
  );
};

CatalogCard.propTypes = {
  film: PropTypes.exact({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoresCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
  }),
  onFilmCatalogCardHover: PropTypes.func.isRequired,
  onFilmClick: PropTypes.func.isRequired,
  renderVideo: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default CatalogCard;
