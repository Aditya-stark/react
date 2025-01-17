// src/components/VoiceRecognition.js
import React, { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const VoiceRecognition = ({ onCommand }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [fullCommand, setFullCommand] = useState("");

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      console.error("Browser does not support speech recognition.");
      return;
    }

    // Start listening when the component mounts
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });

    // Update the full command after a short delay to capture the complete phrase
    const handleTranscriptUpdate = () => {
      if (transcript) {
        setFullCommand(transcript);
      }
    };

    const delay = setTimeout(handleTranscriptUpdate, 1000); // 1-second delay

    return () => {
      clearTimeout(delay);
    };
  }, [transcript]);

  // Handle the full command when it changes
  useEffect(() => {
    if (fullCommand) {
      console.log("Captured Command:", fullCommand); // Log the full command
      onCommand(fullCommand);
      resetTranscript(); // Clear the transcript for the next command
      setFullCommand(""); // Reset the command
    }
  }, [fullCommand, onCommand, resetTranscript]);

  return (
    <div>
      <p>🎤 Listening for your command...</p>
    </div>
  );
};

export default VoiceRecognition;
