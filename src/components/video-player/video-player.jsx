import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const VideoPlayer = forwardRef((props, ref) => {
  const {film: {preview_image, preview_video_link}, className} = props;

  return (
    <video
      className={className || ``}
      poster={preview_image}
      ref={ref}
    >
      <source
        src={preview_video_link}
      />
    </video>
  );
});

VideoPlayer.displayName = `VideoPlayer`;

export default VideoPlayer;

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string
};
