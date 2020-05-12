import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Light from './containers/Light';

function App() {
  return (
    <div className="App">
      <h1>Flashed lights application</h1>
      <Light />
    </div>
  );
}

export default App;
