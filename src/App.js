import React from 'react';
import Landing from './components/landing'
import './App.css';

function App() {
  return (
    <div className="App">
      <a className="banner" href = "https://www.facebook.com/groups/623450688282338">
        <div className="banner">
        </div>
      </a>
      <Landing/>
      <div className = "footer"><h3><a style = {{color: "aqua"}} href = "https://www.facebook.com/groups/623450688282338">Knights Gaming</a> Copyright 2020 - Site Created By:  <a href = "https://www.facebook.com/TroitalityGaming/" style = {{color: "red"}}> Troitality Gaming</a></h3></div>
    </div>
  );
}

export default App;
