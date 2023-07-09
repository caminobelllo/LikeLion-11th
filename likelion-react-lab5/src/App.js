import React from "react";
import "./App.css";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Banner />
      </div>
      <div className="body">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
    </div>
  );
}

export default App;
