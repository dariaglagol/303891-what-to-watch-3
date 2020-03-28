import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "@components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        progress: 0,
        isLoading: true,
        duration: 0,
      };

      this._videoRef = createRef();
    }

    componentDidMount() {
      const {isFullscreenPlayerActive} = this.props;
      const video = this._videoRef.current;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
        currentTime: null,
        duration: video.duration,
      });

      video.ontimeupdate = () => this.setState({
        progress: video.currentTime
      });

      if (isFullscreenPlayerActive) {
        this._videoRef.current.requestFullscreen();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.props.isPlaying) {
        video.muted = true;
        video.play();
      } else {
        video.load();
      }
    }

    render() {
      const {className} = this.props;
      const {progress, duration} = this.state;

      return (
        <Component
          {...this.props}
          progress={progress}
          duration={duration}
          renderVideo={() => {
            return (
              <VideoPlayer
                {...this.props}
                className={className}
                ref={this._videoRef}
              />
            );
          }}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    isFullscreenPlayerActive: PropTypes.bool,
    className: PropTypes.string,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;
