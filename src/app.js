import React from "react";
import { IMAGES } from "./assets";

const App = () => {
  return (
    <>
      <div className="app">
        <img src={IMAGES.logo.src} alt={IMAGES.logo.alt} />
        <p className="construction-text">Site under construction.</p>
      </div>
    </>
  );
};

export default App;
