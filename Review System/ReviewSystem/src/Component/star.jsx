import React from "react";

function Star({ rating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="start"
            style={{
              color: rating >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Star;
