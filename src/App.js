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
      <div className = "footer"><a style = {{color: "red"}} href = "https://www.facebook.com/groups/623450688282338">Knights Gaming</a> Copyright 2020 - Site Created By:  <a href = "https://www.facebook.com/TroitalityGaming/" style = {{color: "red"}}> Troitality Gaming</a></div>
    </div>
  );
}

export default App;
