import React from 'react';
import './App.css';
import NoUseImmerjs from "./components/NoUseImmerjs";
import UseImmerJs from "./components/UseImmerJs";

function App() {
  return (
    <div className="App">
      <h1>immer.js tutorial project</h1>
      <NoUseImmerjs />
      <hr />
      <UseImmerJs />
      <hr />
    </div>
  );
}

export default App;
