import React, { useState, useEffect } from "react";

export default function Title({ changeColor }) {
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
