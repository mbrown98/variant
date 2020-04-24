import React, { useState, useEffect } from "react";

export default function Title({ changeColor, expiresAt }) {
  var storedToken = JSON.parse(sessionStorage.getItem("token"));

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
