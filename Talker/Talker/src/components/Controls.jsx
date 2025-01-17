import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCamera,
  toggleMic,
  connect,
  disconnected,
} from "../store/videoCallSlice";

function Controls() {
  const dispatch = useDispatch();
  const { micOn, cameraOn, connected } = useSelector(
    (state) => state.videoCall
  );

  return (
    <div>
      <button onClick={() => dispatch(toggleMic())}>
        {micOn ? "Mute" : "Unmute"}
      </button>
      <button onClick={() => dispatch(toggleCamera())}>
        {cameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
      {connected ? (
        <button onClick={() => dispatch(disconnected())}>End Call</button>
      ) : (
        <button onClick={() => dispatch(connect())}>Connect</button>
      )}
    </div>
  );
}

export default Controls;
