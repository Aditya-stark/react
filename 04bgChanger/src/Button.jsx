import React from "react";

function Button(props) {
  return (
    <button
      className="outline-none px-4 py-2 shadow-2xl rounded-full text-black"
      style={{ backgroundColor: props.color }}
      onClick={() => {
        props.setupColor(props.color);
      }}
    >
      {props.color}
    </button>
  );
}

export default Button;
