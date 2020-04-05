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
        fullScreenVideoIsPlaying: true
      };

      this._videoRef = createRef();
      this._playButtonClick = this._playButtonClick.bind(this);
      this._setFullScreenPlayer = this._setFullScreenPlayer.bind(this);
    }

    componentDidMount() {
      const video = this._videoRef.current;

      video.oncanplaythrough = () => this.setState({
        isLoading: false,
        currentTime: null,
        duration: video.duration,
      });

      video.ontimeupdate = () => this.setState({
        progress: video.currentTime
      });

      this._setFullScreenPlayer();
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
      const {isFullscreenPlayerActive} = this.props;
      const {fullScreenVideoIsPlaying} = this.state;

      if (!isFullscreenPlayerActive) {
        if (this.props.isPlaying) {
          video.muted = true;
          video.play();
        } else {
          video.load();
        }

        return;
      }

      if (fullScreenVideoIsPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _setFullScreenPlayer() {
      const {isFullscreenPlayerActive} = this.props;

      if (isFullscreenPlayerActive) {

        this._videoRef.current.requestFullscreen();
      }
    }

    _playButtonClick() {
      this.setState((prevState) => {
        return {fullScreenVideoIsPlaying: !prevState.fullScreenVideoIsPlaying};
      });
    }

    render() {
      const {className} = this.props;
      const {progress, duration} = this.state;

      return (
        <Component
          {...this.props}
          progress={progress}
          duration={duration}
          onPlayClick={this._playButtonClick}
          onFullScreenButtonClick={this._setFullScreenPlayer}
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
