import React from 'react';
import './App.css';
import NoUseImmerJS from "./commponents/NoUseImmerJS";
import UseImmerJS from "./commponents/UseImmerJS";
import UseImmerJS2 from "./commponents/UseImmerJS2";


function App() {
  return (
    <div className="App">
      <NoUseImmerJS/>
      <hr/>
      <UseImmerJS/>
      <hr />
      <UseImmerJS2/>
    </div>
  );
}

export default App;
