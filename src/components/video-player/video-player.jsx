import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
  const {film, className} = props;

  const {previewImage, preview} = film;

  return (
    <video
      className={className || ``}
      poster={previewImage}
      ref={ref}
    >
      <source
        src={preview}
      />
    </video>
  );
});

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;

VideoPlayer.propTypes = {
  film: PropTypes.oneOfType([
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
  className: PropTypes.string
};
