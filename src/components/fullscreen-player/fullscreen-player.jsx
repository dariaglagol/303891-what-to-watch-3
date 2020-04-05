import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moment from "moment";
import {getRoute} from "@utils/utils";
import {AppRoute} from "@utils/constants";

const FullscreenPlayer = (props) => {
  const {
    renderVideo,
    progress,
    duration,
    onPlayClick,
    onFullScreenButtonClick,
    film
  } = props;

  const preparedDurationHours = moment.duration(duration, `seconds`).get(`hours`);
  const preparedDurationMinutes = moment.duration(duration, `seconds`).get(`minutes`);
  const preparedDurationSeconds = moment.duration(duration, `seconds`).get(`seconds`);

  return (
    <div className="player">
      {renderVideo()}
      <Link to={getRoute(AppRoute.FILMS, film.id)}>
        <button type="button" className="player__exit">Exit</button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" styles="left: 30%;">Toggler</div>
          </div>
          <div className="player__time-value">{preparedDurationHours}:{preparedDurationMinutes}:{preparedDurationSeconds}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FullscreenPlayer.displayName = `FullscreenPlayer`;

FullscreenPlayer.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired
  }),
  renderVideo: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

export default FullscreenPlayer;
