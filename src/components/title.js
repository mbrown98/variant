import React from "react";

export default function Title({ changeColor, expiresAt }) {
  return (
    <div
      onClick={() => {
        changeColor();
      }}
      style={{ fontSize: "12vh", maxHeight: "50%" }}
    >
      variant
    </div>
  );
}
