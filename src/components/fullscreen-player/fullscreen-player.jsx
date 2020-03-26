import React, {forwardRef} from "react";
import PropTypes from "prop-types";

const FullscreenPlayer = forwardRef((props, ref) => {
  const {
    onExitClick,
    renderVideo
  } = props;

  return (
    <div className="player" ref={ref}>
      {renderVideo()}
      <button type="button" className="player__exit" onClick={onExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" styles="left: 30%;">Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
});

FullscreenPlayer.displayName = `FullscreenPlayer`;

FullscreenPlayer.propTypes = {
  onExitClick: PropTypes.func.isRequired,
  renderVideo: PropTypes.func.isRequired,
};

export default FullscreenPlayer;
