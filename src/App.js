import React from 'react';
import './App.css';
import NoUseImmerJs from "./commponents/NoUseImmerJS";
import UseImmerJS from "./commponents/UseImmerJS";


function App() {
  return (
    <div className="App">
      <NoUseImmerJs/>
      <hr/>
      <UseImmerJS/>
    </div>
  );
}

export default App;
