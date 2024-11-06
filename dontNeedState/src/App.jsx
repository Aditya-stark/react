import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);

  const multi = () => {
    setValue(value);
  };

  return (
    <div>
      <h1>Main Value: {value} </h1>
      <button onClick={multi}> Click me</button>
      <h2>New Value</h2>
    </div>
  );
}

export default App;
