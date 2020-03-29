import React from "react";
import PropTypes from "prop-types";
import PromoFilm from "@components/promo-film/promo-film";
import Footer from "@components/footer/footer";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import withVideoPlayer from "@hocs/with-video-player/with-video-player";
import {FULLSCREEN_VIDEO_CLASS} from "@utils/constants";

const WrappedFullScreenVideo = withVideoPlayer(FullscreenPlayer);

const Main = (props) => {
  const {promoMovie, onFilmClick, renderCatalog, isFullscreenPlayerActive, onFullScreenToggle} = props;

  function _getPlayEvent() {
    onFullScreenToggle(!isFullscreenPlayerActive);
  }

  return (
    <React.Fragment>
      <PromoFilm
        promoMovie={promoMovie}
        onFilmClick={onFilmClick}
        onPlayButtonClick={_getPlayEvent}
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
      genre: PropTypes.string.isRequired,
      released: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      promoCover: PropTypes.string.isRequired,
    }),
    PropTypes.shape({})
  ]),
  films: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.exact({
      name: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      promoCover: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.number.isRequired,
      actors: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
    })),
    PropTypes.array,
  ]).isRequired,
  onFilmClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.exact({
    multiply: PropTypes.string.isRequired,
    single: PropTypes.string.isRequired,
  }).isRequired,
  onGenreTabClick: PropTypes.func.isRequired,
  renderCatalog: PropTypes.func.isRequired,
  isFullscreenPlayerActive: PropTypes.bool.isRequired,
  onFullScreenToggle: PropTypes.func.isRequired,
};

export default Main;
