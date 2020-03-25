import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
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
  film: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};


