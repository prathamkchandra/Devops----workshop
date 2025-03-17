/* App.js */
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">🚀 Welcome to My Stunning React App! 🎨</h1>
      <p className="description">Experience a beautifully designed React app with seamless styling.</p>
      <button className="btn" onClick={() => alert("You clicked the stunning button! 🎉")}>Click Me</button>
    </div>
  );
};

export default App;
