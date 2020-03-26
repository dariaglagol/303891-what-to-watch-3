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
      };

      this._videoRef = createRef();
      this._fullscreenVideoRef = createRef();
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
        currentTime: null,
      });

      video.ontimeupdate = () => this.setState({
        progress: video.currentTime
      });

      const {isFullscreenPlayerActive} = this.props;

      if (isFullscreenPlayerActive) {
        this._fullscreenVideoRef.current.requestFullscreen();
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

      return (
        <Component
          {...this.props}
          ref={this._fullscreenVideoRef}
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
