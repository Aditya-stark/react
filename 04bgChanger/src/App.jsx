import React, { useState } from "react";

import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive")

  const colorData = {
    Red: "red",
    Blue: "blue",
    Green: "green",
    Yellow: "yellow",
    Violet: "violet",
    Orange: "orange",
  };

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap flex-row justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap flex-row justify-center gap-2 bg-white px-4 py-2 rounded-xl ">
          <Button color={colorData.Red} setupColor={setColor}></Button>
          <Button color={colorData.Blue} setupColor={setColor}></Button>
          <Button color={colorData.Green} setupColor={setColor}></Button>
          <Button color={colorData.Yellow} setupColor={setColor}></Button>
          <Button color={colorData.Violet} setupColor={setColor}></Button>
          <Button color={colorData.Orange} setupColor={setColor}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
