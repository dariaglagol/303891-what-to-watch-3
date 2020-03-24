import React, {createRef, PureComponent} from "react";
import VideoPlayer from "@components/video-player/video-player";
import PropTypes from "prop-types";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
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
      return (
        <Component
          {...this.props}
          renderVideo={() => {
            return (
              <VideoPlayer
                {...this.props}
                ref={this._videoRef}
              />
            );
          }}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
