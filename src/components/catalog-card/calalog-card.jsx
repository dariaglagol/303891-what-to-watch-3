import React from "react";
import PropTypes from "prop-types";

const CatalogCard = ({name}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src="img/what-we-do-in-the-shadows.jpg"
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{name}</a>
      </h3>
    </article>
  );
};

CatalogCard.propTypes = {
  name: PropTypes.string.isRequired
};

export default CatalogCard;
