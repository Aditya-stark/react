import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceRec = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const StartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const StopListening = () => {
    SpeechRecognition.stopListening();
  };

  const reset = () => {
    resetTranscript();
  };

  return (
    <div>
      <h1>React Voice Recognition Test</h1>
      <p>
        <strong>Transcript:</strong> {transcript}
      </p>
      <button onClick={StartListening}>Start Listening</button>
      <button onClick={StopListening}>Stop Listening</button>
      <button onClick={reset}>Reset Transcript</button>
    </div>
  );
};

export default VoiceRec;
