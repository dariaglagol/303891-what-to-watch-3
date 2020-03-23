import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
  if (!props.film.preview) {
    console.log('VideoPlayer', props.film);
  }

  const {film: {posterUrl, preview}} = props;

  return (
    <video
      poster={posterUrl}
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
  film: PropTypes.object.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
};


