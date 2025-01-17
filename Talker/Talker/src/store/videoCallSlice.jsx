import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  micOn: false,
  cameraOn: false,
  connected: false,
};

const videoCallSlice = createSlice({
  name: "videoCall",
  initialState,
  reducers: {
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
    toggleMic: (state) => {
      state.micOn = !state.micOn;
    },
    toggleCamera: (state) => {
      state.cameraOn = !state.cameraOn;
    },
    connect: (state) => {
      state.connected = true;
    },
    disconnected: (state) => {
      state.connected = false;
    },
  },
});

export const { authenticate, toggleMic, toggleCamera, connect, disconnected } =
  videoCallSlice.actions;

export default videoCallSlice.reducer;
