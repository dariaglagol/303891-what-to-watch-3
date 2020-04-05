import React from "react";
import PropTypes from "prop-types";
import Header from "@components/header/header";
import {Link} from "react-router-dom";
import {AppRoute, FilmStatusFavorite} from "@utils/constants";
import {getRoute} from "@utils/utils";

const PromoFilm = (props) => {
  const {
    promoMovie: {
      name,
      genre,
      released,
      posterImage,
      backgroundImage,
      isFavorite,
      id
    },
    userData,
    authStatus,
    toggleFilmFavorite
  } = props;

  function _addToFavoriteButtonClickHandler() {
    const statusFavoriteInvert = isFavorite ?
      FilmStatusFavorite.NOT_FAVORITE : FilmStatusFavorite.FAVORITE;

    toggleFilmFavorite(id, statusFavoriteInvert);
  }

  function _renderAddToListButton() {
    return (
      <button
        className="btn btn--list movie-card__button" type="button"
        onClick={_addToFavoriteButtonClickHandler}
      >
        {
          isFavorite ? (
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
          ) : (
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"/>
            </svg>
          )
        }
        <span>My list</span>
      </button>
    );
  }

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        userData={userData}
        authStatus={authStatus}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div
            className="movie-card__poster"
          >
            <Link to={getRoute(AppRoute.FILMS, id)}>
              <img
                src={posterImage}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </Link>
          </div>

          <div className="movie-card__desc">
            <Link to={getRoute(AppRoute.FILMS, id)}>
              <h2
                className="movie-card__title"
              >
                {name}
              </h2>
            </Link>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons">
              <Link to={getRoute(AppRoute.PLAYER, id)}>
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
              </Link>
              {_renderAddToListButton()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  promoMovie: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      posterImage: PropTypes.string.isRequired,
      promoCover: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
    PropTypes.shape({}).isRequired
  ]),
  toggleFilmFavorite: PropTypes.func.isRequired,
  userData: PropTypes.oneOfType([
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
    PropTypes.exact({})
  ]).isRequired,
  authStatus: PropTypes.string.isRequired,
};

export default PromoFilm;
