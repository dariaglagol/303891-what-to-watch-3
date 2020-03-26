import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
  const {film: {poster, preview}, className} = props;

  return (
    <video
      className={className || ``}
      poster={poster}
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
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string
};
