// src/App.js
import React, { useState } from "react";
import VoiceRecognition from "./components/VoiceRecognition";
import CommandHandler from "./components/CommandHandler";

const App = () => {
  const [command, setCommand] = useState("");

  return (
    <div className="App">
      <h1>🎙️ Voice Controlled To-Do App</h1>
      <VoiceRecognition onCommand={(cmd) => setCommand(cmd)} />
      <CommandHandler command={command} />
      x 
    </div>
  );
};

export default App;
