import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function VideoScreen() {
  const { micOn, cameraOn, connected } = useSelector(
    (state) => state.videoCall
  );
  const userVideoRef = useRef(null);
  const partnerVideoRef = useRef(null);

  return (
    <div>
      <div className="user-video-screen">
        <h2>Your Video</h2>
        <video ref={userVideoRef} autoPlay muted={!micOn}>
          {" "}
        </video>
      </div>
      {connected && (
        <div className="partner-video-screen">
          <h2>Parter's Video</h2>
          <video ref={partnerVideoRef} autoPlay muted={!cameraOn}>
            {" "}
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoScreen;
