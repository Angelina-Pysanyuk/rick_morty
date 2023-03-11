import React from "react";

export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <div>
        <img src="./images/logo_image.jpg" alt="Rick and Morty logo" />
      </div>
      Wubba Lubba Dub Dub!
    </div>
  );
};
