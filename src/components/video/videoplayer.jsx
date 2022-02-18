import React, { useRef } from "react";
import Hls from "hls.js";

import "../../style/app.css";
import 'boxicons';

// local video import
// import video from "../../../assets/video.mp4";
import useVideoPlayer from "../../hooks/useVideoPlayer.js";

const App = () => {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);
  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={"https://dzvu9a34k54j6.cloudfront.net/vml-technology/03178580-adae-11eb-a23d-2909153467ee/assets/34ee3841-6bcd-4b4e-bf98-65e6070b54c9.mp4"}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                  <box-icon size="30px" name="play" color="#fff"></box-icon>
              ) : (
                <box-icon size="30px" name="pause" color="#fff"></box-icon>
              )}
            </button>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
          />
          <select
            className="velocity"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
          >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
          </select>
          <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? (
                <box-icon size="20px" name="volume-full" color="#fff"></box-icon>
            ) : (
                <box-icon size="20px" name="volume-mute" color="#fff"></box-icon>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;