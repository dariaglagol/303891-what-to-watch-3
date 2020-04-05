import React from "react";
import PropTypes from "prop-types";
import PromoFilm from "@components/promo-film/promo-film";
import Footer from "@components/footer/footer";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {FULLSCREEN_VIDEO_CLASS} from "@utils/constants";

const WrappedFullScreenVideo = withVideoPlayer(FullscreenPlayer);

const Main = (props) => {
  const {
    promoMovie,
    renderCatalog,
    isFullscreenPlayerActive,
    onFullScreenToggle,
    userData,
    authStatus,
    toggleFilmFavorite
  } = props;

  function _getPlayEvent() {
    onFullScreenToggle(!isFullscreenPlayerActive);
  }

  return (
    <React.Fragment>
      <PromoFilm
        userData={userData}
        authStatus={authStatus}
        promoMovie={promoMovie}
        onPlayButtonClick={_getPlayEvent}
        toggleFilmFavorite={toggleFilmFavorite}
      />
      <div className="page-content">
        {renderCatalog()}
        <Footer />
      </div>
      {isFullscreenPlayerActive &&
        <WrappedFullScreenVideo
          isPlaying={true}
          film={promoMovie}
          className={FULLSCREEN_VIDEO_CLASS}
          isFullscreenPlayerActive={isFullscreenPlayerActive}
          onExitClick={_getPlayEvent}
        />
      }
    </React.Fragment>
  );
};

Main.propTypes = {
  promoMovie: PropTypes.oneOfType([
    PropTypes.shape({
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
    PropTypes.shape({}).isRequired
  ]).isRequired,
  films: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
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
    })),
    PropTypes.shape([]).isRequired,
  ]).isRequired,
  activeGenre: PropTypes.string.isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  renderCatalog: PropTypes.func.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
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

export default Main;
