import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      isLoading: true,
    };

    this._videoRef = createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
      currentTime: null,
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.muted = true;
      video.play();
    } else {
      video.pause();
    }

    if ((this.props.isPlaying === false) && (prevProps.isPlaying === true)) {
      // video.currentTime = null;
      video.load();
    }
  }

  render() {
    const {src, poster} = this.props;

    return (
      <video
        poster={poster}
        ref={this._videoRef}
      >
        <source
          src={src}
        />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
