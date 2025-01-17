import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const WakeUpVoiceAppDetection = () => {
  //State and Speech tools
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript } = useSpeechRecognition();

  //Listening for wakeCommand
  const listenForWakeCommand = (transcript) => {
    if (transcript.toLowerCase().trim().includes("hello")) {
      console.log("Wake command detected! Activating voice recognition...");
      setIsListening(true);
      //Commands mic
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  //Always on Mic
  useEffect(() => {
    SpeechRecognition.startListening({ continues: true });
  }, []);

  //Until wakeup command not found
  useEffect(() => {
    if (!isListening) {
      listenForWakeCommand(transcript);
    }

    if (isListening && transcript !== "") {
      console.log("Voice Command Detected: ", transcript);
    }
  }, [transcript, isListening]);

  //Stop mic
  const stopListening = () => {
    SpeechRecognition.startListening();
    setIsListening(false);
    resetTranscript();
  };

  return (
    <div>
      <h1>Wake-Up Voice Command Example</h1>
      <p>
        <strong>Transcript:</strong> {transcript}
      </p>

      {isListening ? (
        <button onClick={stopListening}>Stop Listening</button>
      ) : (
        <p>Waiting for wake command...</p>
      )}

      <p>
        {isListening
          ? "Listening for voice commands"
          : 'Listening for "hello"...'}
      </p>
    </div>
  );
};

export default WakeUpVoiceAppDetection;
