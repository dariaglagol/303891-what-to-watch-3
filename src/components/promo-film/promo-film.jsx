import React from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import {PageTypes} from "@utils/constants";

const PromoFilm = (props) => {
  const {promoMovieCover: {title, genre, releaseDate}, onFilmClick, onPlayButtonClick} = props;

  function _onFilmClickHandler() {
    onFilmClick(PageTypes.MOVIE);
  }

  function _playButtonClickHandler() {
    onPlayButtonClick();
  }

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            className="movie-card__poster"
            onClick={_onFilmClickHandler}
          >
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt="The Grand Budapest Hotel poster"
              width="218"
              height="327"
            />
          </div>

          <div className="movie-card__desc">
            <h2
              className="movie-card__title"
              onClick={_onFilmClickHandler}
            >
              {title}
            </h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseDate}</span>
            </p>

            <div className="movie-card__buttons">
              <button
                className="btn btn--play movie-card__button"
                type="button"
                onClick={_playButtonClickHandler}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"/>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  promoMovieCover: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  onFilmClick: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default PromoFilm;
