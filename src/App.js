import React from 'react';
import './App.scss';

//Components

import Header from './Components/Header';
import Questions from './Components/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <Questions />
    </div>
  );
}

export default App;
