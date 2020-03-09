import React, {PureComponent} from 'react';
import VideoPlayer from "@components/video-player/video-player";

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };
    }

    render() {
      const {activePlayerId} = this.state;

      return <Component
        {...this.props}
        renderPlayer={(src, id) => {
          return (
            <VideoPlayer
              src={src}
              isPlaying={id === activePlayerId}
              onPlayButtonClick={() => this.setState({
                isPlaying: true
              })}
            />
          );
        }}
      />;
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};

export default withVideoPlayer;
