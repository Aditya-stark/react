import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // setCounter(counter++);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    
    /* 
    if wana use previous state of the counter then use like this
    setCounter((prevCounter) => {prevCOunter + 1})
    */
  };

  const removeValue = () => {
    if (counter < 1) {
      counter = 0;
    } else {
      counter--;
    }
    setCounter(counter);
  };

  const reset = () => {
    setCounter((counter = 0));
  };

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
