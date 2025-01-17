import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const WakeUpVoiceApp = () => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();

  // Check if the browser supports the Speech Recognition API
  if (!browserSupportsSpeechRecognition) {
    return <p>Browser doesn't support speech recognition.</p>;
  }

  //Listening for wakeCommand
  const listenForWakeCommand = (transcript) => {
    if (transcript.toLowerCase().trim().includes("hello")) {
      console.log("Wake command detected! Activating voice recognition...");
      setIsListening(true);
      //Commands mic
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  // Automatically start listening when the component mounts
  useEffect(() => {
    // Start listening for the wake-up command as soon as the page loads
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  // Restart listening if it stops due to inactivity
  useEffect(() => {
    if (!listening && !isListening) {
      console.log('Restarting listening due to inactivity...');
      SpeechRecognition.startListening({ continuous: true });
    }
  }, [listening, isListening]);

  // Check for wake command and handle active listening
  useEffect(() => {
    if (!isListening) {
      listenForWakeCommand(transcript);
    }

    // If active listening is on, handle the voice commands
    if (isListening && transcript !== '') {
      console.log('Voice command detected:', transcript);
      // Add custom actions here based on the voice commands
    }
  }, [transcript, isListening]);

  // Function to stop active listening
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
    resetTranscript(); // Reset the transcript after stopping
  };

  return (
    <div>
      <h1>Wake-Up Voice Command Example</h1>
      <p><strong>Transcript:</strong> {transcript}</p>

      {isListening ? (
        <button onClick={stopListening}>Stop Listening</button>
      ) : (
        <p>Waiting for wake command...</p>
      )}

      <p>{isListening ? 'Listening for voice commands' : 'Listening for wake word...'}</p>
    </div>
  );
};

export default WakeUpVoiceApp;
